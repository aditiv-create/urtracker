export interface Workout {
  name: string;
  icon: string;
  exercises: string[];
}

export const gymSchedules: Record<string, Record<string, Workout>> = {
  young: {
    Sunday: {
      name: 'Push',
      icon: '💪',
      exercises: [
        'Incline Smith Press: 3 sets x 4–6 reps',
        'Overhead Shoulder Press: 3 sets x 4–7 reps',
        'Machine reverse flies or Chest fly: 3 sets x 6–8 reps',
        'Overhead tricep extensions: 3 sets x 6–8 reps',
        'Cable tricep pushdowns: 2 sets x 6–8 reps'
      ]
    },
    Monday: {
      name: 'Pull',
      icon: '🏋️‍♀️',
      exercises: [
        'Lat Pulldown: 3 sets x 6–8 reps',
        'T-Bar Rows: 3 sets x 4–8 reps',
        'Tucked Cable Rows: 3 sets x 6–8 reps',
        'Preacher dumbbell curls: 3 sets x 6–8 reps',
        'Core: leg raises: 3 sets x 8 reps',
        'Core: cable crunches: 3 sets x 8 reps'
      ]
    },
    Tuesday: {
      name: 'Glutes & Hamstrings',
      icon: '🍑',
      exercises: [
        'Reverse leg curls: 3 sets x 6–8 reps',
        'Romanian deadlifts: 3 sets x 6–8 reps',
        'Smith machine squats (feet forward): 4 sets x 6–8 reps',
        'Hip thrusts: 4 sets x 6–8 reps'
      ]
    },
    Wednesday: {
      name: 'Cardio',
      icon: '🏊‍♀️',
      exercises: [
        'Swim (steady pace, comfortable effort)'
      ]
    },
    Thursday: {
      name: 'Quads',
      icon: '🦵',
      exercises: [
        'Bulgarian squats: 3 sets x 6–8 reps',
        'Smith machine squats (normal stance): 3 sets x 6–8 reps',
        'Leg extensions: 4 sets x 6–8 reps',
        'Calf raises: 4 sets x 6–8 reps',
        'Optional core at the end if energy allows'
      ]
    },
    Friday: {
      name: 'Active Rest',
      icon: '🚶‍♀️',
      exercises: [
        'Walk with a friend (easy social pace, 30–60 minutes)'
      ]
    },
    Saturday: {
      name: 'Fun Movement',
      icon: '🎾',
      exercises: [
        'Pickleball (length and intensity based on energy and schedule)'
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
        'Walking: 30–45 min at comfortable pace',
        'Swimming: gentle laps',
        'Or comfortable cycling'
      ]
    },
    Tuesday: {
      name: 'Flexibility & Balance',
      icon: '🧘‍♀️',
      exercises: [
        'Gentle yoga or Pilates: 20–30 min',
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
        'Incline Push-Ups: 2 sets x 8–10 reps',
        'Lat Pulldown or Band Pulls: 2 sets x 10–12 reps',
        'Glute Bridges: 2 sets x 12–15 reps',
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
        '20–30 min gentle stretching',
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
