import { useState, useEffect, useCallback } from 'react';
import { phaseData, getPhase, Step } from '@/data/phaseData';
import { getGymSchedule } from '@/data/gymSchedules';

interface DailyFlowState {
  currentPhase: string | null;
  currentDay: string | null;
  currentStepIndex: number;
  completedSteps: number[];
  cycleDay: number | null;
  pathway: string;
}

interface SavedSession {
  currentPhase: string;
  currentDay: string;
  currentStepIndex: number;
  completedSteps: number[];
  cycleDay: number;
  pathway: string;
  timestamp: string;
}

export const useDailyFlow = () => {
  const [state, setState] = useState<DailyFlowState>({
    currentPhase: null,
    currentDay: null,
    currentStepIndex: 0,
    completedSteps: [],
    cycleDay: null,
    pathway: 'young-flexible'
  });

  const [isStarted, setIsStarted] = useState(false);
  const [hasSavedSession, setHasSavedSession] = useState(false);

  // Check for saved session on mount
  useEffect(() => {
    const savedData = localStorage.getItem('dailyFlowSession');
    if (savedData) {
      setHasSavedSession(true);
    }
  }, []);

  // Save state to localStorage
  const saveState = useCallback(() => {
    if (!state.currentPhase || !state.currentDay) return;
    
    const sessionData: SavedSession = {
      currentPhase: state.currentPhase,
      currentDay: state.currentDay,
      currentStepIndex: state.currentStepIndex,
      completedSteps: state.completedSteps,
      cycleDay: state.cycleDay!,
      pathway: state.pathway,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('dailyFlowSession', JSON.stringify(sessionData));
  }, [state]);

  // Auto-save when state changes
  useEffect(() => {
    if (isStarted) {
      saveState();
    }
  }, [state, isStarted, saveState]);

  const startApp = useCallback((cycleDay: number, weekDay: string, pathway: string) => {
    const phase = getPhase(cycleDay);
    
    // Save pathway to settings
    const settings = JSON.parse(localStorage.getItem('dailyFlowSettings') || '{}');
    settings.pathway = pathway;
    localStorage.setItem('dailyFlowSettings', JSON.stringify(settings));

    setState({
      currentPhase: phase,
      currentDay: weekDay,
      currentStepIndex: 0,
      completedSteps: [],
      cycleDay,
      pathway
    });
    setIsStarted(true);
  }, []);

  const loadSavedSession = useCallback(() => {
    const savedData = localStorage.getItem('dailyFlowSession');
    if (savedData) {
      const session: SavedSession = JSON.parse(savedData);
      setState({
        currentPhase: session.currentPhase,
        currentDay: session.currentDay,
        currentStepIndex: session.currentStepIndex,
        completedSteps: session.completedSteps,
        cycleDay: session.cycleDay,
        pathway: session.pathway
      });
      setIsStarted(true);
    }
  }, []);

  const getAdaptedSteps = useCallback((phaseSteps: Step[], pathway: string): Step[] => {
    const isWorkingPath = pathway === 'young-work' || pathway === 'peri-work';

    if (!isWorkingPath) {
      return phaseSteps;
    }

    return phaseSteps.map((step, index) => {
      if (index === 0) return step;

      if (step.title.includes('Career Block 1') || step.title.includes('Power Focus')) {
        return {
          time: '09:00–17:00',
          title: 'Work Day',
          icon: '💼',
          description: 'Your 8-hour work day. Take breaks, stay hydrated, and be gentle with yourself.',
          tasks: [
            'Morning: Focus on priority tasks when energy is highest',
            'Midday snack: Keep protein + healthy snacks at desk',
            'Lunch break: Step away from desk, eat mindfully (12:00-13:00)',
            'Afternoon: Meetings, emails, lighter tasks',
            'Take short 5-min movement breaks every 90 minutes',
            'Drink water consistently: finish 2 bottles during work hours',
            'If working from home: Change location for lunch, get sunlight'
          ]
        };
      }

      if (
        step.title.includes('Snack & Walk') ||
        step.title.includes('Lunch') ||
        step.title.includes('Career Block 2') ||
        step.title.includes('Outreach & Social') ||
        step.title.includes('Gentle Midday') ||
        step.title.includes('Flexible Block') ||
        step.title.includes('Walk & Tasks') ||
        step.title.includes('Decompress') ||
        step.title.includes('Bare-Minimum Win') ||
        step.title.includes('Optional Light Block')
      ) {
        return null;
      }

      if (step.title.includes('Movement Time') || step.title.includes('Gym') || step.title.includes('Training')) {
        return {
          ...step,
          time: '17:30–18:30',
          description: 'Post-work movement. ' + step.description
        };
      }

      if (step.title.includes('Dinner')) {
        return { ...step, time: '18:30–20:00' };
      }

      if (step.title.includes('Evening') && !step.title.includes('Wind-down')) {
        return { ...step, time: '20:00–21:00' };
      }

      return step;
    }).filter((step): step is Step => step !== null);
  }, []);

  const getCurrentSteps = useCallback((): Step[] => {
    if (!state.currentPhase) return [];
    const phase = phaseData[state.currentPhase];
    return getAdaptedSteps(phase.steps, state.pathway);
  }, [state.currentPhase, state.pathway, getAdaptedSteps]);

  const setCurrentStep = useCallback((index: number) => {
    setState(prev => ({ ...prev, currentStepIndex: index }));
  }, []);

  const completeStep = useCallback(() => {
    setState(prev => {
      const newCompletedSteps = prev.completedSteps.includes(prev.currentStepIndex)
        ? prev.completedSteps
        : [...prev.completedSteps, prev.currentStepIndex];
      return { ...prev, completedSteps: newCompletedSteps };
    });
  }, []);

  const resetApp = useCallback(() => {
    localStorage.removeItem('dailyFlowSession');
    setState({
      currentPhase: null,
      currentDay: null,
      currentStepIndex: 0,
      completedSteps: [],
      cycleDay: null,
      pathway: 'young-flexible'
    });
    setIsStarted(false);
    setHasSavedSession(false);
  }, []);

  const getCurrentPhaseData = useCallback(() => {
    if (!state.currentPhase) return null;
    return phaseData[state.currentPhase];
  }, [state.currentPhase]);

  const getCurrentGymSchedule = useCallback(() => {
    return getGymSchedule(state.pathway);
  }, [state.pathway]);

  return {
    ...state,
    isStarted,
    hasSavedSession,
    startApp,
    loadSavedSession,
    getCurrentSteps,
    setCurrentStep,
    completeStep,
    resetApp,
    getCurrentPhaseData,
    getCurrentGymSchedule
  };
};
