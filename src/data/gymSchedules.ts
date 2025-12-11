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
      name: 'Lower Body + Core',
      icon: '🦵',
      exercises: [
        '— Warm-up (5–10 min): Brisk walk/easy cycle, arm circles, hip circles, leg swings, cat–cow',
        '',
        'Squats or Chair Sit-to-Stand (bodyweight or dumbbells): 2–3 sets x 8–12 reps',
        'Dumbbell Romanian Deadlift or Hip Thrust/Glute Bridge: 2–3 sets x 8–12 reps',
        'Step-Ups (low step/bench): 2–3 sets x 8–10 reps each leg',
        'Static Lunge or Split Squat (hold support if needed): 2–3 sets x 8 reps each leg',
        'Calf Raises: 2–3 sets x 12–15 reps',
        '',
        '— Core & Mobility (5–10 min):',
        'Dead Bugs: 8–10 each side',
        'Side Plank (knees down if needed): 15–30 sec each side',
        '',
        '— Cool-down (5 min): Gentle stretching, breathing'
      ]
    },
    Monday: {
      name: 'Upper Body + Core',
      icon: '💪',
      exercises: [
        '— Warm-up (5–10 min): Brisk walk/easy cycle, arm circles, hip circles, leg swings, cat–cow',
        '',
        'Incline Push-Ups (hands on wall or bench): 2–3 sets x 8–12 reps',
        'Dumbbell Chest Press (on bench or floor): 2–3 sets x 8–12 reps',
        'Dumbbell Row or Cable Row: 2–3 sets x 8–12 reps',
        'Seated Dumbbell Shoulder Press: 2–3 sets x 8–10 reps',
        'Lat Pulldown or Assisted Pull-Down: 2–3 sets x 8–12 reps',
        'Biceps Curls: 2–3 sets x 10–12 reps',
        'Triceps Pushdowns or Dumbbell Kickbacks: 2–3 sets x 10–12 reps',
        '',
        '— Core/Posture:',
        'Bird Dogs: 8–10 each side',
        'Face Pulls or Band Pull-Apart: 12–15 reps',
        '',
        '— Cool-down (5 min): Gentle stretching, breathing'
      ]
    },
    Tuesday: {
      name: 'Cardio + Mobility',
      icon: '🚴‍♀️',
      exercises: [
        '— Cardio (25–35 min):',
        'Brisk walk, cycling, or swimming',
        'Intensity: you can talk but not sing (moderate)',
        '',
        '— Mobility/Yoga (10–15 min):',
        'Hip flexor stretch',
        'Hamstring stretch',
        'Chest opener against wall',
        'Gentle spinal twists',
        '',
        '💡 This day should feel refreshing, not draining'
      ]
    },
    Wednesday: {
      name: 'Full-Body Strength',
      icon: '🏋️‍♀️',
      exercises: [
        '— Warm-up (5–10 min): Brisk walk/easy cycle, arm circles, hip circles, leg swings, cat–cow',
        '',
        'Goblet Squat or Leg Press: 2–3 sets x 8–10 reps',
        'Hip Thrust or Glute Bridge: 2–3 sets x 10–12 reps',
        'Dumbbell Row: 2–3 sets x 8–12 reps',
        'Dumbbell Chest Press: 2–3 sets x 8–12 reps',
        'Dumbbell Romanian Deadlift: 2–3 sets x 8–10 reps',
        'Pallof Press or Anti-rotation Band Hold: 2–3 sets x 10–12 reps each side',
        '',
        '💡 Core can be baked in; add 1 plank variation if you like',
        '',
        '— Cool-down (5 min): Gentle stretching, breathing'
      ]
    },
    Thursday: {
      name: 'Fun Movement Day',
      icon: '🎾',
      exercises: [
        '— Options (30–45 min):',
        'Walk with a friend',
        'Dance class, Zumba, pickleball, or light tennis',
        'Comfortable cycling path ride',
        '',
        '💡 Intensity can be moderate; if sleep-deprived, keep it lower and focus on just showing up and moving'
      ]
    },
    Friday: {
      name: 'Gentle Movement (Optional)',
      icon: '🧘‍♀️',
      exercises: [
        '— If energy is good:',
        '20–30 min easy walk',
        '15–20 min yoga / stretching',
        'Light core work (dead bugs, glute bridges, clamshells)',
        '',
        '— If energy is low:',
        'Active recovery or extra rest day',
        '',
        '💡 Listening to the body matters more than "checking a box"'
      ]
    },
    Saturday: {
      name: 'Full Rest',
      icon: '🛋️',
      exercises: [
        'No structured workouts',
        'Short walk is fine if it feels good',
        '',
        '💡 Focus on sleep, hydration, and calm nervous system'
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
