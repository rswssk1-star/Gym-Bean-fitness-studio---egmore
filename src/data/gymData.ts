import { Program, Trainer, Feature } from '../types';

export const GYM_INFO = {
  name: 'Gym Bean Fitness Studio - Egmore',
  shortName: 'Gym Bean Fitness',
  tagline: 'Train Strong. Live Strong.',
  subTagline: 'Train smarter. Get stronger. Become your best version at Gym Bean Fitness Studio Egmore.',
  locationShort: 'Egmore, Chennai',
  address: 'BUILDING, 3rd floor 140, Rukmani Lakshmipathi Salai (Marshall Road), Kamatchi Building, Egmore, Chennai, Tamil Nadu 600008',
  plusCode: '37C6+F8 Chennai, Tamil Nadu',
  phone: '6385664871',
  formattedPhone: '+91 63856 64871',
  email: 'contact@gymbeanegmore.com',
  rating: '4.8',
  reviewCount: '216 votes',
  hours: {
    weekdays: '5:30 AM – 10:00 PM',
    sunday: '6:00 AM – 1:00 PM',
  },
  landmarks: '3rd Floor Kamatchi Building, 140 Rukmani Lakshmipathi Salai (Marshall Road), Egmore (Plus Code: 37C6+F8)',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gym+Bean+Fitness+Studio+Egmore+140+Rukmani+Lakshmipathi+Salai+Chennai+600008',
  whatsappUrl: 'https://wa.me/916385664871?text=Hi%20Gym%20Bean%20Fitness%20Studio!%20I%20would%20like%20to%20know%20more%20about%20membership%20and%20training%20programs.',
};

export const PROGRAMS: Program[] = [
  {
    id: 'strength-training',
    title: 'STRENGTH TRAINING',
    subtitle: 'Powerlifting, Hypertrophy & Barbell Mastery',
    category: 'Hypertrophy & Strength',
    description: 'Scientifically sequenced progressive overload protocols designed to build dense lean muscle, bone density, and peak raw power.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    tag: 'Popular',
    fullDetails: {
      duration: '45 - 60 Mins',
      intensity: 'High / Advanced',
      focusAreas: ['Compound Lifts', 'Hypertrophy', 'Form Mastery', 'Core Stability'],
      idealFor: 'Anyone wanting to build solid muscle mass, increase bench/squat/deadlift numbers, and transform body composition.',
      scheduleFrequency: '4–5 Sessions / Week',
      includedBenefits: [
        'Dedicated Olympic barbell platforms & bumper plates',
        'Custom 1RM progression tracking',
        'Biomechanics posture & injury prevention coaching',
        'Nutritional protein & calorie blueprint'
      ]
    }
  },
  {
    id: 'fat-loss',
    title: 'FAT LOSS',
    subtitle: 'High-Metabolic Conditioning & Caloric Burn',
    category: 'Conditioning & Shred',
    description: 'High-energy metabolic circuits and targeted calorie burn protocols engineered to accelerate fat burning while preserving lean muscle mass.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    tag: 'High Energy',
    fullDetails: {
      duration: '40 - 50 Mins',
      intensity: 'High Dynamic',
      focusAreas: ['Metabolic Rate', 'Visceral Fat Reduction', 'Cardiovascular Capacity', 'EPOC Afterburn'],
      idealFor: 'Members aiming to lose inches, strip stubborn body fat, boost daily stamina, and sculpt defined lines.',
      scheduleFrequency: '3–5 Sessions / Week',
      includedBenefits: [
        'Heart-rate targeted training intervals',
        'Body composition bio-impedance assessments',
        'Realistic Indian macro diet guidelines',
        'Weekly accountability check-ins'
      ]
    }
  },
  {
    id: 'functional-fitness',
    title: 'FUNCTIONAL FITNESS',
    subtitle: 'Mobility, Agility, Core & Athletic Performance',
    category: 'Athletic Conditioning',
    description: 'Dynamic multi-planar movements utilizing kettlebells, plyometrics, suspension trainers, and battle ropes for real-world athletic durability.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000&auto=format&fit=crop',
    tag: 'Athletic',
    fullDetails: {
      duration: '45 Mins',
      intensity: 'Moderate - High',
      focusAreas: ['Joint Mobility', 'Kinetic Agility', 'Rotational Power', 'Core Strength'],
      idealFor: 'Athletes, busy professionals wanting pain-free movement, and anyone desiring functional everyday power.',
      scheduleFrequency: '3–4 Sessions / Week',
      includedBenefits: [
        'Turf track & functional rig stations',
        'Kettlebell and battle rope circuits',
        'Hip, ankle, and thoracic mobility drills',
        'Improved athletic reaction time and balance'
      ]
    }
  },
  {
    id: 'personal-training',
    title: 'PERSONAL TRAINING',
    subtitle: '1-on-1 Customized Elite Coaching',
    category: 'Individualized Coaching',
    description: 'Dedicated 1-on-1 mentorship with certified coaches who tailor each rep, set, and meal to your unique biological makeup and goals.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
    tag: 'VIP Elite',
    fullDetails: {
      duration: '60 Mins',
      intensity: 'Fully Customized',
      focusAreas: ['100% Dedicated Attention', 'Personalized Macros', 'Form Correction', 'Fast-Track Results'],
      idealFor: 'Individuals with specific deadlines (weddings, competitions, medical rehab) or seeking maximum accountability.',
      scheduleFrequency: 'Flexible Daily Slots',
      includedBenefits: [
        'Dedicated master coach assigned to you',
        'Customized daily nutrition and hydration roadmap',
        'Form correction and hands-on spotting',
        '24/7 trainer chat support for questions'
      ]
    }
  },
  {
    id: 'cardio-conditioning',
    title: 'CARDIO & CONDITIONING',
    subtitle: 'Endurance Building, HIIT & VO2 Max',
    category: 'Cardiovascular Health',
    description: 'State-of-the-art treadmills, rowers, assault bikes, and stairmasters paired with structured interval training for optimal lung capacity and stamina.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop',
    tag: 'Stamina',
    fullDetails: {
      duration: '35 - 50 Mins',
      intensity: 'Variable Interval',
      focusAreas: ['VO2 Max', 'Aerobic Base', 'Cardiovascular Longevity', 'Endurance'],
      idealFor: 'Runners, sport players, and anyone looking to improve cardiovascular stamina and energy levels.',
      scheduleFrequency: '3–5 Sessions / Week',
      includedBenefits: [
        'Smart interactive cardio consoles',
        'Heart rate monitoring zones',
        'Assault bike & rowing sprint pyramids',
        'Lowered resting heart rate & improved blood pressure'
      ]
    }
  },
  {
    id: 'general-fitness',
    title: 'GENERAL FITNESS',
    subtitle: 'Active Lifestyle, Postural Balance & Wellness',
    category: 'Holistic Health',
    description: 'Balanced full-body routines tailored for beginners and lifelong trainees to maintain healthy posture, lean muscle, and stress relief.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1000&auto=format&fit=crop',
    tag: 'All Levels',
    fullDetails: {
      duration: '45 Mins',
      intensity: 'Moderate & Accessible',
      focusAreas: ['Full Body Conditioning', 'Postural Alignment', 'Stress Reduction', 'Long-term Habit'],
      idealFor: 'Beginners starting their fitness journey or members maintaining a healthy, vibrant day-to-day lifestyle.',
      scheduleFrequency: '3–4 Sessions / Week',
      includedBenefits: [
        'Guided beginner machine orientation',
        'Gentle progression without burnout',
        'Back pain and desk posture corrective exercises',
        'Friendly, welcoming community vibe'
      ]
    }
  }
];

export const WHY_RIO_FEATURES: Feature[] = [
  {
    number: '01',
    title: 'RESULT-FOCUSED TRAINING',
    description: 'No guesswork or aimless reps. Every program is built on proven sports science, progressive resistance, and measurable physical metrics.',
    highlight: 'Data-driven progression tracking'
  },
  {
    number: '02',
    title: 'SUPPORTIVE FITNESS COMMUNITY',
    description: 'Train alongside 500+ passionate members in Egmore who push each other to reach new personal bests in a positive, ego-free atmosphere.',
    highlight: '500+ active members in Chennai'
  },
  {
    number: '03',
    title: 'MODERN TRAINING ENVIRONMENT',
    description: 'Fully air-conditioned multi-zone facility equipped with top-tier resistance machines, Olympic barbells, turf tracks, and sanitization protocols.',
    highlight: 'Premium resistance & cardio gear'
  },
  {
    number: '04',
    title: 'TRAINING THAT FITS YOUR GOALS',
    description: 'Flexible timing from 5:30 AM to 10:00 PM, customized routine options, and attentive coaches ready to adjust workouts around your busy schedule.',
    highlight: '6 days/week flexible schedules'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'alex-morgan',
    name: 'Alex Morgan',
    role: 'Head Strength Coach',
    experience: '8+ Years Exp',
    specialty: ['Powerlifting', 'Strength & Hypertrophy', 'Biomechanics'],
    bio: 'Specializes in Olympic barbell lifts, structural strength progression, and maximizing lean muscle gains with zero injury downtime.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    certifications: ['CSCS Certified', 'CrossFit Level 2', 'CPR/AED Specialist'],
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Functional & Fat Loss Specialist',
    experience: '6+ Years Exp',
    specialty: ['Metabolic HIIT', 'Mobility & Posture', 'Women’s Transformation'],
    bio: 'Dedicated to helping individuals shed body fat, gain athletic confidence, and develop core stability through high-intensity functional training.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    certifications: ['ACE Certified Personal Trainer', 'Kettlebell Specialist', 'Certified Sports Nutritionist'],
  },
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    role: 'Bodybuilding & Conditioning Coach',
    experience: '9+ Years Exp',
    specialty: ['Body Sculpting', 'Hypertrophy Protocols', 'Contest Prep'],
    bio: 'Known for transformative muscle-building regimes, targeted isolation techniques, and tailored diet planning for Chennai athletes.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    certifications: ['ISSA Master Trainer', 'Precision Nutrition Level 1', 'Sports Rehab Coach'],
  },
  {
    id: 'deepa-venkat',
    name: 'Deepa Venkat',
    role: 'Endurance & General Fitness Coach',
    experience: '5+ Years Exp',
    specialty: ['Cardio Conditioning', 'Beginner Transformation', 'Flexibility'],
    bio: 'Passionate about making fitness intuitive and sustainable, guiding beginners step-by-step from zero to consistent healthy habits.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    certifications: ['REPs India Certified', 'TRX Suspension Trainer', 'First Aid Certified'],
  }
];

export const TESTIMONIALS = [
  {
    name: 'Karthik Ramanathan',
    role: 'Member since 2024',
    rating: 5,
    quote: 'Best gym in Egmore hands down. The equipment is top notch, coaches actually pay attention to your form, and the environment pushes you every single day.',
    result: 'Lost 12 kg in 4 months'
  },
  {
    name: 'Ananya Sundaram',
    role: 'Member since 2025',
    rating: 5,
    quote: 'The energy at Gym Bean Fitness Studio is unmatched. Clean facilities, safe environment for women, and very supportive trainers who personalize every session.',
    result: 'Improved strength & endurance'
  },
  {
    name: 'Suresh Babu',
    role: 'Member since 2023',
    rating: 5,
    quote: '4.8 stars with 216+ votes is well deserved. Alex and the team helped fix my deadlift technique and my back pain vanished within weeks. Highly recommend to everyone in Chennai.',
    result: 'Squat PR increased by 40kg'
  }
];
