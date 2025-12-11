export interface Step {
  time: string;
  title: string;
  icon: string;
  description: string;
  tasks: string[];
}

export interface Phase {
  name: string;
  days: string;
  color: string;
  secondary: string;
  accent: string;
  tone: string;
  steps: Step[];
}

export const phaseData: Record<string, Phase> = {
  menstrual: {
    name: 'Menstrual Phase',
    days: '1-7',
    color: '#D4A5A5',
    secondary: '#F5EDED',
    accent: '#B88B8B',
    tone: 'gentle and comforting',
    steps: [
      {
        time: '07:30–08:30',
        title: 'Wake & Soft Start',
        icon: '🌅',
        description: 'Good morning, lovely! Take it slow today. Your body is doing important work.',
        tasks: [
          'Drink a big glass of water beside your bed',
          'Open blinds or step to a window for 3–5 minutes of light',
          'Quick warm shower or bath to relax cramps',
          'Light stretch: neck rolls, cat-cow, hip circles (5–10 min)',
          'Warm, easy breakfast (oats with milk/protein, or toast with paneer/tofu)',
          'Portions: Protein 1 palm; Carbs 1 handful; Fats 1 thumb; Veggies/fruit 1 fist'
        ]
      },
      {
        time: '09:00–11:00',
        title: 'Career Block 1',
        icon: '💼',
        description: 'One focused task is plenty today. Quality over quantity.',
        tasks: [
          'One focused session for applications or portfolio work',
          'Use a lo-fi or focus playlist',
          'Keep only necessary tabs open',
          'Goal: 1–2 good applications, not perfection'
        ]
      },
      {
        time: '11:00–12:30',
        title: 'Gentle Midday',
        icon: '🚶‍♀️',
        description: 'Time to move gently and nourish yourself.',
        tasks: [
          'Snack: yogurt + fruit + nuts or a small sandwich',
          'Short 10–15 minute walk, even indoors',
          'Finish 1st water bottle (~800–900 ml) by now'
        ]
      },
      {
        time: '12:30–14:00',
        title: 'Lunch & Rest',
        icon: '🍽️',
        description: 'Warm, comforting food and a moment to pause.',
        tasks: [
          'Warm meal: dal, rice, veggies, yogurt or khichdi',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1–2 handfuls; Fat 1 thumb',
          'Eat away from laptop when possible',
          'Phone down for first few minutes'
        ]
      },
      {
        time: '14:00–16:00',
        title: 'Flexible Block',
        icon: '📋',
        description: 'Light admin or rest—you choose what feels right.',
        tasks: [
          'Option A: Light admin (emails, organizing files, checking tracker)',
          'Option B: Rest, nap (20–30 min), gentle reading',
          'One tiny thing is enough today',
          'Complete 2nd water bottle by 17:00 (~1.6–1.8 L total)'
        ]
      },
      {
        time: '16:00–17:30',
        title: 'Movement Time',
        icon: '🏃‍♀️',
        description: 'Move in whatever way feels good to your body right now.',
        tasks: [
          'If energy okay: shortened gym session (reduce 1 set, lighter weights)',
          'If energy low: 20–30 min gentle walk or easy swim',
          'Minimum win: 10–15 minutes movement and stretching'
        ]
      },
      {
        time: '17:30–19:30',
        title: 'Dinner & Unwind',
        icon: '🍜',
        description: 'Warm, nourishing food and time to decompress.',
        tasks: [
          'Warm dinner: rice + dal + sabzi, or tofu stir-fry with noodles',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1 handful; Fat 1 thumb',
          'Avoid very salty/greasy foods to reduce bloating',
          'Finish 3rd water bottle by ~21:00 (~2.4–2.7 L total)'
        ]
      },
      {
        time: '19:30–21:00',
        title: 'Evening Rituals',
        icon: '🛁',
        description: 'Second bath and soothing rituals to close the day.',
        tasks: [
          'Second bath/shower to relax muscles',
          'Skincare and body lotion as grounding ritual',
          'Light stretching or yoga (5–10 min) if body wants it'
        ]
      },
      {
        time: '21:00–23:00',
        title: 'Wind-down & Sleep',
        icon: '🌙',
        description: 'Let your mind and body rest. You did enough today.',
        tasks: [
          'No more applications or intense screens',
          'Brain-dump racing thoughts onto paper',
          'Dim lights, cosy clothes, herbal tea (caffeine-free)',
          'Short journaling: "What did I manage today?"',
          'In bed between 22:30–23:30'
        ]
      }
    ]
  },
  follicular: {
    name: 'Late Follicular Phase',
    days: '8-13',
    color: '#E8D5B7',
    secondary: '#F9F5ED',
    accent: '#C9A86A',
    tone: 'energetic and building',
    steps: [
      {
        time: '07:30–08:30',
        title: 'Wake, Water, Bath',
        icon: '☀️',
        description: 'Good morning! Your energy is building. Let\'s make the most of it!',
        tasks: [
          'Big glass of water and open blinds for light',
          'Short morning shower or bath',
          'Dynamic stretch: 5–10 squats, arm circles, hip openers',
          'Higher protein breakfast (Greek yogurt + fruit + granola, or tofu scramble + toast)',
          'Portions: Protein 1–2 palms; Carbs 1–2 handfuls; Fats 1 thumb; Veg/fruit 1–2 fists'
        ]
      },
      {
        time: '08:30–10:30',
        title: 'Career Block 1',
        icon: '🚀',
        description: 'Deep work time! Your brain is sharp—use this window wisely.',
        tasks: [
          'Main application/portfolio block of the day',
          'Target: 2–3 strong applications or one major project chunk',
          'No phone except during short breaks'
        ]
      },
      {
        time: '10:30–12:00',
        title: 'Snack & Walk',
        icon: '🥗',
        description: 'Quick break to recharge.',
        tasks: [
          'Snack: hummus with veg/crackers, nuts + fruit, or protein bar',
          'Short 10–15 minute walk to clear head',
          'Finish most of 1st water bottle by 12:00'
        ]
      },
      {
        time: '12:00–13:30',
        title: 'Lunch',
        icon: '🥙',
        description: 'Fuel up with a colorful, balanced meal.',
        tasks: [
          'Big, colorful bowl: veggies + whole grains + plant protein',
          'Example: quinoa, tofu/paneer, roast veg, tahini/yogurt dressing',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1–2 handfuls; Fat 1–2 thumbs'
        ]
      },
      {
        time: '13:30–15:30',
        title: 'Career Block 2',
        icon: '💻',
        description: 'Networking, updates, or study time.',
        tasks: [
          'Networking emails, LinkedIn updates, school work',
          'If brain feels tired: swap to reading or creative tasks',
          'Minimum: 45–60 minutes of focus',
          'Complete 2nd water bottle (~1.6–1.8 L total)'
        ]
      },
      {
        time: '16:00–17:30',
        title: 'Gym: Full Session',
        icon: '💪',
        description: 'Time for your full workout! Your body is ready.',
        tasks: [
          'Follow programmed workout for today',
          'Keep rest periods 60–90 seconds',
          'Focus on form, track weight increases',
          'Pre-gym snack: banana, dates, or toast with peanut butter'
        ]
      },
      {
        time: '17:30–19:30',
        title: 'Dinner & Chill',
        icon: '🍲',
        description: 'Post-workout refuel and relaxation.',
        tasks: [
          'Dinner: stir-fry tofu/tempeh + veg + rice/noodles; or dal, sabzi, chapati',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1–2 handfuls; Fat 1 thumb',
          'Finish 3rd water bottle by ~21:00 (2.5–3 L total)'
        ]
      },
      {
        time: '19:30–21:00',
        title: 'Gentle Evening',
        icon: '✨',
        description: 'Wind down and separate day from night.',
        tasks: [
          'Light tidy of room/desk',
          'Second bath/shower; cosy clothes',
          'No serious work after this point'
        ]
      },
      {
        time: '21:00–23:00',
        title: 'Wind-down & Sleep',
        icon: '🌜',
        description: 'Protect your sleep even when energy is high.',
        tasks: [
          'Screen dimming or blue-light filter',
          'Write tomorrow\'s top 3 tasks',
          'Journal: one win, one gratitude, one thing to move forward',
          'In bed by ~23:00'
        ]
      }
    ]
  },
  ovulatory: {
    name: 'Ovulatory / Early Luteal',
    days: '14-21',
    color: '#B8CDB8',
    secondary: '#EFF5EF',
    accent: '#8FAA8F',
    tone: 'confident and social',
    steps: [
      {
        time: '07:30–08:30',
        title: 'Wake & Check-In',
        icon: '🌟',
        description: 'How\'s your energy today? Let\'s check in with yourself.',
        tasks: [
          'Water and light as usual',
          'Quick body scan: "Energy from 1–10?"',
          'Short bath or shower',
          'Breakfast: smoothie with protein + fruit + seeds, or avocado toast + tofu',
          'Portions: Protein 1–2 palms; Carbs 1–2 handfuls; Fats 1–2 thumbs; Veg/fruit 1–2 fists'
        ]
      },
      {
        time: '08:30–10:30',
        title: 'Power Focus',
        icon: '⚡',
        description: 'Use your sharp focus and confidence!',
        tasks: [
          'Deep project work: applications needing thought, portfolio edits, test tasks',
          'Use sharper focus in this window',
          '1–2 high-quality outputs vs. many shallow ones'
        ]
      },
      {
        time: '10:30–12:00',
        title: 'Walk & Tasks',
        icon: '🚶',
        description: 'Movement and light admin.',
        tasks: [
          '10–15 minute walk or mobility',
          'Respond to easy emails or set up calls/interviews',
          'Finish 1st water bottle by lunch'
        ]
      },
      {
        time: '12:00–13:30',
        title: 'Lunch',
        icon: '🥣',
        description: 'Balanced meal with extra complex carbs.',
        tasks: [
          'Extra complex carbs to support upcoming luteal phase',
          'Example: chickpea salad + veg + bread; or brown rice, dal, mixed sabzi',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 2 handfuls; Fat 1 thumb'
        ]
      },
      {
        time: '13:30–15:30',
        title: 'Outreach & Social',
        icon: '📧',
        description: 'Perfect time for networking and connection.',
        tasks: [
          'Networking messages, follow-ups, LinkedIn posts',
          'Emails to professors or mentors',
          'If energy dips: shorten to 60 min, rest instead'
        ]
      },
      {
        time: '16:00–17:30',
        title: 'Training or Cardio',
        icon: '🏋️',
        description: 'Strong workout or cardio—you\'ve got this!',
        tasks: [
          'Strong gym day or cardio',
          'Keep intensity but avoid ego lifting—prioritise form',
          'Cardio/swim: steady pace, moderate intensity',
          'Pre-workout snack: fruit + nuts or yogurt'
        ]
      },
      {
        time: '17:30–19:30',
        title: 'Dinner & Soft Landing',
        icon: '🍛',
        description: 'Nourish and notice any mood/sleep shifts.',
        tasks: [
          'Dinner: tofu/tempeh stir-fry, dal + sabzi, or veg + grain bowl',
          'Complete 3rd water bottle by 21:00 (2.5–3 L total)',
          'Notice if mood or sleep start shifting'
        ]
      },
      {
        time: '19:30–21:00',
        title: 'Gentle Reset',
        icon: '🛀',
        description: 'Wind down with care.',
        tasks: [
          'Second bath/shower',
          'Light tidy, cosy clothes',
          'No intense work or discussions'
        ]
      },
      {
        time: '21:00–23:00',
        title: 'Wind-down & Sleep',
        icon: '🌙',
        description: 'Prepare for restful sleep.',
        tasks: [
          'Low light, calming activities',
          'Journal: "What went well? What can wait?"',
          'In bed by ~23:00'
        ]
      }
    ]
  },
  luteal: {
    name: 'Late Luteal Phase',
    days: '22-28',
    color: '#C4B5D4',
    secondary: '#F2EEF7',
    accent: '#9D88B3',
    tone: 'nurturing and patient',
    steps: [
      {
        time: '08:00–09:00',
        title: 'Gentle Wake',
        icon: '☁️',
        description: 'Take your time waking up. No rush today.',
        tasks: [
          'Water first thing',
          'Open blinds, gentle light',
          'Short warm bath or shower',
          'Light stretch: forward folds, gentle twists',
          'Comfort breakfast: oats, toast, warm foods',
          'Portions: Protein 1 palm; Carbs 1–2 handfuls; Fat 1 thumb; Veg/fruit 1 fist'
        ]
      },
      {
        time: '09:00–11:00',
        title: 'Bare-Minimum Win',
        icon: '📝',
        description: 'One small win is enough. You\'re doing great.',
        tasks: [
          'Pick one or two small tasks',
          'Use timers: 25-minute blocks with breaks',
          'If focus is low, switch to organizing or planning'
        ]
      },
      {
        time: '11:00–12:30',
        title: 'Decompress',
        icon: '🫖',
        description: 'Gentle break and snack time.',
        tasks: [
          'Snack: cheese/crackers, fruit + yogurt, or toast',
          'Gentle walk if it feels good',
          'Finish 1st water bottle by 12:00'
        ]
      },
      {
        time: '12:30–14:00',
        title: 'Lunch',
        icon: '🍜',
        description: 'Warm, comforting food for your body.',
        tasks: [
          'Warm, comforting meal',
          'Extra complex carbs help with cravings',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 2 handfuls; Fat 1 thumb'
        ]
      },
      {
        time: '14:00–16:00',
        title: 'Optional Light Block',
        icon: '💭',
        description: 'Only if you have energy. Rest is productive too.',
        tasks: [
          'Light admin or rest',
          'If tired: nap (20–30 min) or gentle activity',
          'Complete 2nd water bottle by 17:00'
        ]
      },
      {
        time: '16:00–17:30',
        title: 'Movement Time',
        icon: '🌸',
        description: 'Gentle movement or rest—listen to your body.',
        tasks: [
          'If energy okay: light gym session (reduce sets/weights)',
          'If energy low: 15–20 minute walk or stretching',
          'Yoga or swimming are great options'
        ]
      },
      {
        time: '17:30–19:30',
        title: 'Dinner & Care',
        icon: '🍵',
        description: 'Nourish yourself with warm, comforting food.',
        tasks: [
          'Warm, satisfying dinner',
          'Include magnesium-rich foods (dark leafy greens, nuts)',
          'Finish 3rd water bottle by 21:00'
        ]
      },
      {
        time: '19:30–21:00',
        title: 'Self-Care Time',
        icon: '💆',
        description: 'Extra self-care rituals tonight.',
        tasks: [
          'Longer bath with epsom salts',
          'Gentle skincare routine',
          'Cosy clothes, warm drinks'
        ]
      },
      {
        time: '21:00–22:30',
        title: 'Early Wind-down',
        icon: '🌜',
        description: 'Earlier bedtime if your body needs it.',
        tasks: [
          'No screens or very dim',
          'Journal: acknowledge any difficult feelings',
          'Heating pad if needed',
          'In bed by 22:00–22:30'
        ]
      }
    ]
  }
};

export const getPhase = (day: number): string => {
  if (day >= 1 && day <= 7) return 'menstrual';
  if (day >= 8 && day <= 13) return 'follicular';
  if (day >= 14 && day <= 21) return 'ovulatory';
  if (day >= 22 && day <= 28) return 'luteal';
  return 'menstrual';
};
