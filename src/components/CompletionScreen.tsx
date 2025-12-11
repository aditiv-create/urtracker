import { Button } from '@/components/ui/button';

interface CompletionScreenProps {
  completedCount: number;
  totalSteps: number;
  onRestart: () => void;
}

export const CompletionScreen = ({ completedCount, totalSteps, onRestart }: CompletionScreenProps) => {
  const completionRate = Math.round((completedCount / totalSteps) * 100);

  let message = '';
  if (completionRate === 100) {
    message = "You completed EVERYTHING today! Absolutely incredible! 🎉✨";
  } else if (completionRate >= 70) {
    message = "You did so much today! That's wonderful! 🌟💖";
  } else if (completionRate >= 40) {
    message = "You showed up and did your best! That's what matters! 💙🌸";
  } else {
    message = "You made it through the day! That alone is an achievement! 💜☁️";
  }

  return (
    <div className="animate-slide-in text-center py-12 md:py-20">
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
        Day Complete! 🌙
      </h2>
      
      <p className="font-body text-base md:text-lg text-muted-foreground mb-8">
        {message}
      </p>

      <p className="font-body text-2xl md:text-3xl text-foreground mb-10">
        You completed <span className="font-semibold">{completedCount}</span> out of <span className="font-semibold">{totalSteps}</span> tasks
      </p>

      <div className="bg-[#EFF5EF] border border-[#B8CDB8] rounded-sm p-8 max-w-md mx-auto mb-10 shadow-card">
        <p className="font-body text-lg leading-relaxed text-foreground">
          Remember: Progress isn't perfection.<br />
          You're exactly where you need to be.
        </p>
      </div>

      <Button
        onClick={onRestart}
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-widest font-medium py-6 px-12 shadow-card transition-all hover:-translate-y-0.5"
      >
        Start New Day
      </Button>
    </div>
  );
};
