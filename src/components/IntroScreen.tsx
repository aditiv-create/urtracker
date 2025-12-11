import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface IntroScreenProps {
  onStart: (cycleDay: number, weekDay: string, pathway: string) => void;
  onLoadSaved: () => void;
  hasSavedSession: boolean;
}

const pathways = [
  { value: 'young-flexible', label: 'Young Professional - Building Career (Flexible Schedule)' },
  { value: 'young-work', label: 'Young Professional - Full-Time Job (8hr Work Day)' },
  { value: 'peri-work', label: 'Perimenopause/40s - Working (8hr Work Day)' },
  { value: 'peri-retired', label: 'Perimenopause/40s - Retired/Flexible' },
];

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const IntroScreen = ({ onStart, onLoadSaved, hasSavedSession }: IntroScreenProps) => {
  const [cycleDay, setCycleDay] = useState<string>('');
  const [weekDay, setWeekDay] = useState<string>('');
  const [pathway, setPathway] = useState<string>('');

  // Auto-detect today's day
  useEffect(() => {
    const today = new Date().getDay();
    setWeekDay(weekDays[today]);
  }, []);

  const handleStart = () => {
    const day = parseInt(cycleDay);
    if (!day || day < 1 || day > 28 || !weekDay || !pathway) {
      return;
    }
    onStart(day, weekDay, pathway);
  };

  const isValid = cycleDay && parseInt(cycleDay) >= 1 && parseInt(cycleDay) <= 28 && weekDay && pathway;

  return (
    <div className="max-w-md mx-auto mt-12 md:mt-20 animate-slide-in">
      <div className="bg-card border border-border rounded-sm shadow-soft p-8 md:p-12">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
            Daily Flow
          </h1>
          <p className="text-muted-foreground text-sm md:text-base font-light tracking-wide">
            Your gentle companion through every phase
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Select Your Pathway
            </Label>
            <Select value={pathway} onValueChange={setPathway}>
              <SelectTrigger className="w-full bg-card border-border focus:ring-primary/20 focus:border-primary/40">
                <SelectValue placeholder="Choose your situation..." />
              </SelectTrigger>
              <SelectContent>
                {pathways.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              What day of your cycle are you on?
            </Label>
            <Input
              type="number"
              min={1}
              max={28}
              placeholder="Enter 1-28"
              value={cycleDay}
              onChange={(e) => setCycleDay(e.target.value)}
              className="bg-card border-border focus:ring-primary/20 focus:border-primary/40"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              What day is today?
            </Label>
            <Select value={weekDay} onValueChange={setWeekDay}>
              <SelectTrigger className="w-full bg-card border-border focus:ring-primary/20 focus:border-primary/40">
                <SelectValue placeholder="Select a day..." />
              </SelectTrigger>
              <SelectContent>
                {weekDays.map((day) => (
                  <SelectItem key={day} value={day}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasSavedSession && (
            <div className="text-center pt-2">
              <Button
                variant="outline"
                onClick={onLoadSaved}
                className="text-xs uppercase tracking-widest font-medium"
              >
                Load Previous Session
              </Button>
            </div>
          )}

          <Button
            onClick={handleStart}
            disabled={!isValid}
            className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-widest font-medium py-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Begin
          </Button>
        </div>
      </div>
    </div>
  );
};
