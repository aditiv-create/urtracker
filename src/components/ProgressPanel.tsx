import { cn } from '@/lib/utils';
import { Step, Phase } from '@/data/phaseData';
import { Workout } from '@/data/gymSchedules';

interface ProgressPanelProps {
  phase: Phase;
  currentDay: string;
  steps: Step[];
  currentStepIndex: number;
  completedSteps: number[];
  gym: Workout;
  onStepClick: (index: number) => void;
}

export const ProgressPanel = ({
  phase,
  currentDay,
  steps,
  currentStepIndex,
  completedSteps,
  onStepClick,
}: ProgressPanelProps) => {
  return (
    <div className="bg-card border border-border rounded-sm shadow-soft p-6 md:p-8 md:sticky md:top-5 h-fit">
      <h2 className="font-display text-xl md:text-2xl text-foreground mb-6">
        Today's Flow
      </h2>

      <div 
        className="p-4 rounded-sm border mb-6"
        style={{
          backgroundColor: `hsl(var(--phase-secondary))`,
          borderColor: `hsl(var(--phase-color))`,
          color: `hsl(var(--phase-accent))`
        }}
      >
        <div className="font-body font-medium text-sm">{phase.name}</div>
        <div className="font-body text-xs opacity-80 mt-1">
          Days {phase.days} · {currentDay}
        </div>
      </div>

      <div className="space-y-2">
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = completedSteps.includes(index);

          return (
            <button
              key={index}
              onClick={() => onStepClick(index)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-sm border border-transparent transition-all text-left",
                "hover:border-phase hover:bg-phase-secondary",
                isActive && "border-phase-accent bg-phase-secondary",
                isCompleted && "opacity-50"
              )}
              style={isActive ? {
                backgroundColor: `hsl(var(--phase-secondary))`,
                borderColor: `hsl(var(--phase-accent))`
              } : undefined}
            >
              <span className="text-lg flex-shrink-0">{step.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="font-body text-xs font-semibold text-foreground truncate">
                  {step.time}
                </div>
                <div className="font-body text-xs text-muted-foreground truncate">
                  {step.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
