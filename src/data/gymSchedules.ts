export interface Workout {
  name: string;
  icon: string;
  exercises: string[];
}

export const gymSchedules: Record<string, Record<string, Workout>> = {
  young: {
    Sunday: {
      name: 'Active Recovery',
      icon: '🧘',
      exercises: [
        'Yoga flow: 20-30 min',
        'Foam rolling all major muscle groups',
        'Light stretching',
        'Optional: gentle walk or swim'
      ]
    },
    Monday: {
      name: 'Lower Body A (Quad Focus)',
      icon: '🦵',
      exercises: [
        'Barbell Back Squat: 4 sets x 6-8 reps',
        'Leg Press: 3 sets x 10-12 reps',
        'Romanian Deadlift: 3 sets x 8-10 reps',
        'Walking Lunges: 3 sets x 12 each leg',
        'Leg Extensions: 3 sets x 12-15 reps',
        'Calf Raises: 4 sets x 15-20 reps'
      ]
    },
    Tuesday: {
      name: 'Upper Body A (Push Focus)',
      icon: '💪',
      exercises: [
        'Bench Press: 4 sets x 6-8 reps',
        'Overhead Press: 3 sets x 8-10 reps',
        'Incline Dumbbell Press: 3 sets x 10-12 reps',
        'Lateral Raises: 3 sets x 12-15 reps',
        'Tricep Pushdowns: 3 sets x 12-15 reps',
        'Face Pulls: 3 sets x 15-20 reps'
      ]
    },
    Wednesday: {
      name: 'Cardio & Core',
      icon: '🏃‍♀️',
      exercises: [
        'LISS Cardio: 30-45 min (walking, cycling, swimming)',
        'Planks: 3 sets x 45-60 seconds',
        'Dead Bugs: 3 sets x 12 each side',
        'Bicycle Crunches: 3 sets x 20',
        'Bird Dogs: 3 sets x 10 each side'
      ]
    },
    Thursday: {
      name: 'Lower Body B (Glute/Ham Focus)',
      icon: '🍑',
      exercises: [
        'Hip Thrusts: 4 sets x 8-10 reps',
        'Sumo Deadlift: 4 sets x 6-8 reps',
        'Bulgarian Split Squats: 3 sets x 10 each leg',
        'Leg Curls: 3 sets x 12-15 reps',
        'Cable Kickbacks: 3 sets x 12-15 each leg',
        'Calf Raises: 4 sets x 15-20 reps'
      ]
    },
    Friday: {
      name: 'Upper Body B (Pull Focus)',
      icon: '🏋️‍♀️',
      exercises: [
        'Pull-Ups or Lat Pulldown: 4 sets x 6-10 reps',
        'Barbell Row: 4 sets x 8-10 reps',
        'Seated Cable Row: 3 sets x 10-12 reps',
        'Face Pulls: 3 sets x 15-20 reps',
        'Bicep Curls: 3 sets x 12-15 reps',
        'Hammer Curls: 3 sets x 12-15 reps'
      ]
    },
    Saturday: {
      name: 'Full Body or Fun Activity',
      icon: '🎉',
      exercises: [
        'Option A: Full body circuit workout',
        'Option B: Sports, dance class, or hiking',
        'Focus on enjoying movement!'
      ]
    }
  },
  perimenopause: {
    Sunday: {
      name: 'Rest & Recovery',
      icon: '🛋️',
      exercises: [
        'Complete rest or very gentle stretching',
        'Focus on sleep and nutrition',
        'Foam rolling if desired'
      ]
    },
    Monday: {
      name: 'Gentle Cardio',
      icon: '🚶‍♀️',
      exercises: [
        'Walking: 30-45 min at comfortable pace',
        'Swimming: gentle laps',
        'Or comfortable cycling'
      ]
    },
    Tuesday: {
      name: 'Flexibility & Balance',
      icon: '🧘‍♀️',
      exercises: [
        'Gentle yoga or Pilates: 20-30 min',
        'Hip flexor stretch',
        'Hamstring stretch',
        'Shoulder rolls',
        'Balance practice (single leg stands)'
      ]
    },
    Wednesday: {
      name: 'Full-Body Strength',
      icon: '🏋️‍♀️',
      exercises: [
        'Squats (chair support if needed): 2 sets x 10 reps',
        'Incline Push-Ups: 2 sets x 8-10 reps',
        'Lat Pulldown or Band Pulls: 2 sets x 10-12 reps',
        'Glute Bridges: 2 sets x 12-15 reps',
        'Core work (dead bugs or planks): 2 sets'
      ]
    },
    Thursday: {
      name: 'Gentle Cardio',
      icon: '🚴‍♀️',
      exercises: [
        'Walking, swimming, or dancing: 30 min',
        'Keep intensity comfortable and enjoyable'
      ]
    },
    Friday: {
      name: 'Stretching & Recovery',
      icon: '☁️',
      exercises: [
        '20-30 min gentle stretching',
        'Foam rolling or self-massage',
        'Gentle movement or rest'
      ]
    },
    Saturday: {
      name: 'Social Movement',
      icon: '👥',
      exercises: [
        'Walk with a friend',
        'Group class or gentle activity',
        'Gardening or leisure activity'
      ]
    }
  }
};

export const getGymSchedule = (pathway: string): Record<string, Workout> => {
  if (pathway === 'young-flexible' || pathway === 'young-work') {
    return gymSchedules.young;
  } else if (pathway === 'peri-work' || pathway === 'peri-retired') {
    return gymSchedules.perimenopause;
  }
  return gymSchedules.young;
};
