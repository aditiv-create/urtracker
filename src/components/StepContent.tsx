import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Step } from '@/data/phaseData';
import { Workout } from '@/data/gymSchedules';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface StepContentProps {
  step: Step;
  stepIndex: number;
  totalSteps: number;
  gym: Workout;
  currentDay: string;
  currentPhase: string;
  onNext: () => void;
  onPrev: () => void;
  onComplete: () => void;
  onSkip: () => void;
  onReset: () => void;
}

const encouragement = [
  "Amazing work! You're taking such good care of yourself! ✨",
  "That's the energy! You're doing great! 🌟",
  "Look at you go! So proud of you! 💖",
  "You're crushing it today! Keep going! 🎯",
  "Beautiful work! Your body thanks you! 🌸",
  "Yes! That's how it's done! 💪",
  "You're being so kind to yourself today! 💕"
];

const comfortMessages = [
  "It's totally okay! Every day is different. 💙",
  "No worries at all! Just showing up matters. 🌈",
  "That's completely fine! Be gentle with yourself. ☁️",
  "All good! Tomorrow is a new opportunity. ✨",
  "It happens! You're still doing amazing. 💜",
  "Don't worry! Rest is productive too. 🌙"
];

export const StepContent = ({
  step,
  stepIndex,
  totalSteps,
  gym,
  currentDay,
  currentPhase,
  onNext,
  onPrev,
  onComplete,
  onSkip,
  onReset,
}: StepContentProps) => {
  const [showMessage, setShowMessage] = useState<{ type: 'success' | 'comfort'; text: string; nextTitle: string } | null>(null);
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

  const isMovementStep = step.title.includes('Movement') || step.title.includes('Gym') || step.title.includes('Training');
  const isLastStep = stepIndex === totalSteps - 1;

  useEffect(() => {
    const workoutKey = `workout_${currentDay}_${stepIndex}`;
    const saved = localStorage.getItem(workoutKey);
    if (saved) {
      setCompletedWorkouts(JSON.parse(saved));
    } else {
      setCompletedWorkouts([]);
    }
  }, [currentDay, stepIndex]);

  const toggleWorkout = (exerciseIndex: number) => {
    const workoutKey = `workout_${currentDay}_${stepIndex}`;
    const newCompleted = completedWorkouts.includes(exerciseIndex)
      ? completedWorkouts.filter(i => i !== exerciseIndex)
      : [...completedWorkouts, exerciseIndex];
    setCompletedWorkouts(newCompleted);
    localStorage.setItem(workoutKey, JSON.stringify(newCompleted));
  };

  const handleComplete = () => {
    if (!isLastStep) {
      const randomMsg = encouragement[Math.floor(Math.random() * encouragement.length)];
      setShowMessage({ type: 'success', text: randomMsg, nextTitle: '' });
      setTimeout(() => {
        setShowMessage(null);
        onComplete();
        onNext();
      }, 2000);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    if (!isLastStep) {
      const randomMsg = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
      setShowMessage({ type: 'comfort', text: randomMsg, nextTitle: '' });
      setTimeout(() => {
        setShowMessage(null);
        onNext();
      }, 2000);
    } else {
      onNext();
    }
  };

  if (showMessage) {
    return (
      <div className="animate-slide-in flex items-center justify-center min-h-[400px]">
        <div 
          className={cn(
            "p-8 rounded-sm border shadow-card max-w-md text-center",
            showMessage.type === 'success' && "bg-[#EFF5EF] border-[#B8CDB8]",
            showMessage.type === 'comfort' && "bg-[#F2EEF7] border-[#C4B5D4]"
          )}
        >
          <p className="font-accent text-lg leading-relaxed text-foreground">
            {showMessage.text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-in">
      {/* Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrev}
          disabled={stepIndex === 0}
          className="text-xs uppercase tracking-widest font-medium"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={isLastStep}
          className="text-xs uppercase tracking-widest font-medium"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="text-xs uppercase tracking-widest font-medium ml-auto"
        >
          <RotateCcw className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      {/* Step Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-8 pb-5 border-b border-border">
        <h2 className="font-display text-3xl md:text-4xl text-foreground">
          {step.icon} {step.title}
        </h2>
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          {step.time}
        </span>
      </div>

      {/* Description */}
      <p className="font-body text-base leading-relaxed text-muted-foreground mb-8">
        {step.description}
      </p>

      {/* Tasks */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-widest text-foreground font-medium mb-4">
          Let's do this:
        </h3>
        <ul className="space-y-0">
          {step.tasks.map((task, index) => (
            <li 
              key={index}
              className="py-3 border-b border-border last:border-b-0 text-sm text-foreground font-body"
            >
              <span className="text-muted-foreground mr-3">—</span>
              {task}
            </li>
          ))}
        </ul>
      </div>

      {/* Gym Section */}
      {isMovementStep && gym && (
        <div className="mt-10 pt-6 border-t border-border">
          <h3 className="text-lg font-display text-foreground mb-4">
            {gym.icon} Today's Workout: {gym.name}
          </h3>
          <div className="space-y-0">
            {gym.exercises.map((exercise, index) => (
              <button
                key={index}
                onClick={() => toggleWorkout(index)}
                className="w-full flex items-center gap-4 py-3 border-b border-border last:border-b-0 hover:bg-phase-secondary transition-colors text-left px-2 -mx-2"
              >
                <div 
                  className={cn(
                    "w-5 h-5 rounded-sm border-2 flex items-center justify-center flex-shrink-0 transition-colors",
                    completedWorkouts.includes(index) 
                      ? "bg-phase-accent border-phase-accent text-primary-foreground"
                      : "border-muted-foreground"
                  )}
                >
                  {completedWorkouts.includes(index) && (
                    <span className="text-xs">✓</span>
                  )}
                </div>
                <span className={cn(
                  "text-sm font-body transition-all",
                  completedWorkouts.includes(index) && "opacity-50 line-through"
                )}>
                  {exercise}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground font-body">
            {(currentPhase === 'menstrual' || currentPhase === 'luteal')
              ? 'Remember: Modify as needed. Lighter weights and reduced sets are perfectly fine today.'
              : "You've got the energy for this! Focus on form and progressive overload."}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
        <Button
          onClick={handleComplete}
          className="flex-1 max-w-xs bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-widest font-medium py-6 shadow-card transition-all hover:-translate-y-0.5"
        >
          Completed
        </Button>
        <Button
          variant="outline"
          onClick={handleSkip}
          className="flex-1 max-w-xs text-xs uppercase tracking-widest font-medium py-6 hover:bg-muted transition-all hover:-translate-y-0.5"
        >
          Skip
        </Button>
      </div>
    </div>
  );
};
