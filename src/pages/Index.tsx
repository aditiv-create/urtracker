import { useEffect, useState } from 'react';
import { useDailyFlow } from '@/hooks/useDailyFlow';
import { IntroScreen } from '@/components/IntroScreen';
import { ProgressPanel } from '@/components/ProgressPanel';
import { StepContent } from '@/components/StepContent';
import { CompletionScreen } from '@/components/CompletionScreen';
import { ThemeToggle } from '@/components/ThemeToggle';
import { phaseData } from '@/data/phaseData';

const Index = () => {
  const {
    isStarted,
    hasSavedSession,
    currentPhase,
    currentDay,
    currentStepIndex,
    completedSteps,
    pathway,
    startApp,
    loadSavedSession,
    getCurrentSteps,
    setCurrentStep,
    completeStep,
    resetApp,
    getCurrentPhaseData,
    getCurrentGymSchedule,
  } = useDailyFlow();

  const [isCompleted, setIsCompleted] = useState(false);

  // Set CSS custom properties based on phase
  useEffect(() => {
    if (currentPhase) {
      const phase = phaseData[currentPhase];
      // Convert hex to HSL or use the predefined CSS variables
      const phaseVarMap: Record<string, { color: string; secondary: string; accent: string }> = {
        menstrual: {
          color: 'var(--phase-menstrual)',
          secondary: 'var(--phase-menstrual-secondary)',
          accent: 'var(--phase-menstrual-accent)'
        },
        follicular: {
          color: 'var(--phase-follicular)',
          secondary: 'var(--phase-follicular-secondary)',
          accent: 'var(--phase-follicular-accent)'
        },
        ovulatory: {
          color: 'var(--phase-ovulatory)',
          secondary: 'var(--phase-ovulatory-secondary)',
          accent: 'var(--phase-ovulatory-accent)'
        },
        luteal: {
          color: 'var(--phase-luteal)',
          secondary: 'var(--phase-luteal-secondary)',
          accent: 'var(--phase-luteal-accent)'
        }
      };

      const vars = phaseVarMap[currentPhase];
      if (vars) {
        document.documentElement.style.setProperty('--phase-color', vars.color);
        document.documentElement.style.setProperty('--phase-secondary', vars.secondary);
        document.documentElement.style.setProperty('--phase-accent', vars.accent);
      }
    }
  }, [currentPhase]);

  const steps = getCurrentSteps();
  const phase = getCurrentPhaseData();
  const gymSchedule = getCurrentGymSchedule();
  const gym = currentDay ? gymSchedule[currentDay] : null;

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(currentStepIndex - 1);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to start over? This will clear your progress.')) {
      resetApp();
      setIsCompleted(false);
    }
  };

  const handleRestart = () => {
    resetApp();
    setIsCompleted(false);
  };

  if (!isStarted) {
    return (
      <main className="min-h-screen p-4 md:p-6">
        <ThemeToggle />
        <IntroScreen
          onStart={startApp}
          onLoadSaved={loadSavedSession}
          hasSavedSession={hasSavedSession}
        />
      </main>
    );
  }

  if (isCompleted && phase) {
    return (
      <main className="min-h-screen p-4 md:p-6">
        <ThemeToggle />
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-sm shadow-soft p-8 md:p-12">
            <CompletionScreen
              completedCount={completedSteps.length}
              totalSteps={steps.length}
              onRestart={handleRestart}
            />
          </div>
        </div>
      </main>
    );
  }

  if (!phase || !currentDay || !gym) return null;

  const currentStep = steps[currentStepIndex];

  return (
    <main className="min-h-screen p-4 md:p-6">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto animate-slide-in">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Progress Panel - Hidden on mobile by default, shown at bottom */}
          <aside className="w-full md:w-80 order-2 md:order-1">
            <ProgressPanel
              phase={phase}
              currentDay={currentDay}
              steps={steps}
              currentStepIndex={currentStepIndex}
              completedSteps={completedSteps}
              gym={gym}
              onStepClick={setCurrentStep}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1 order-1 md:order-2">
            <div className="bg-card border border-border rounded-sm shadow-soft p-6 md:p-12">
              <StepContent
                step={currentStep}
                stepIndex={currentStepIndex}
                totalSteps={steps.length}
                gym={gym}
                currentDay={currentDay}
                currentPhase={currentPhase!}
                onNext={handleNext}
                onPrev={handlePrev}
                onComplete={completeStep}
                onSkip={handleNext}
                onReset={handleReset}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
