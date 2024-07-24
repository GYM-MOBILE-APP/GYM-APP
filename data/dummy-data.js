
import Category from "../models/category";
import Information from "../models/information";

export const CATEGORIES = [
  new Category(
    "c1",
    "YOGA",
    "https://t4.ftcdn.net/jpg/02/36/24/71/360_F_236247111_5LuBqQS1netR5GqjsY8UPU0z3oTlE4H9.jpg"
  ),
  new Category(
    "c2",
    "PILATES & BARRE",
    "https://www.kiralates.com.au/uploads/5/4/5/6/54564945/__5902504_orig.jpg"
  ),
  new Category(
    "c3",
    "FITNESS",
    "https://t3.ftcdn.net/jpg/06/52/33/66/360_F_652336682_U0tRWOuRwVNzRFeIVgqk8CQgVFBKYeWP.jpg"
  ),
  new Category(
    "c4",
    "MEDITATION",
    "https://img.freepik.com/premium-photo/peaceful-man-doing-yoga-meditating-isolated-white-background_382934-3829.jpg"
  ),
];

export const DESCRIPTION = [
  new Information(
    "m1",
    "c1",
    "31 Yoga Poses for Beginners",
    "https://www.yogabreezebali.com/wp-content/uploads/yoga-poses-mosaic-800px..jpg",
    [
      "Downward Facing Dog (Adho Mukha Svanasana)",
      "Mountain Pose (Tadasana)",
      "Warrior I (Virabhadrasana I)",
      "Warrior II (Virabhadrasana II)",
      "Extended Side Angle (Utthita Parvakonasana)",
      "Triangle Pose (Utthita Trikonasana)",
      "Standing Forward Bend (Uttanasana)",
      "Reverse Warrior (Viparita Virabhadrasana)",
      "Garland Pose (Malasana)",
      "Half Forward Bend (Ardha Uttanasana)",
      "Pyramid Pose (Parsvottanasana)",
      "Raised Hands Pose (Urdhva Hastasana)",
      "Low Lunge",
      "Tree Pose (Vrksasana)",
      "Downward Facing Dog Split",
      "Plank Pose",
      "Cat-Cow Stretch (Chakravakasana)",
      "Bridge Pose (Setu Bandha Sarvangasana)",
      "Cobra Pose (Bhujangasana)",
      "Knees, Chest, and Chin (Ashtanga Namaskara)",
      "Staff Pose (Dandasana)",
      "Cobbler's Pose (Baddha Konasana)",
      "Easy Pose (Sukhasana)",
      "Half Lord of the Fishes Pose (Ardha Matsyendrasana)",
      "Head to Knee Pose (Janu Sirsasana)",
      "Seated Forward Bend (Paschimottanasana)",
      "Seated Wide Angle Straddle (Upavistha Konasana)",
      "Happy Baby Pose (Ananda Balasana)",
      "Supine Spinal Twist (Supta Matsyendrasana)",
      "Child's Pose (Balasana)",
      "Corpse Pose (Savasana)",
    ]
  ),
  new Information(
    "m2",
    "c2",
    "PILATES & BARRE in 10 DAYS",
    "https://i.pinimg.com/originals/ba/e2/47/bae2479125592368487d923131d63347.jpg",
    [
      "Day 1: 35-Minute Lower Body Dumbbell Workout",
      "Day 2: 25-Minute Pilates Barre Class At Home",
      "Day 3: 25-Minute Dumbbell Arm Workout",
      "Day 4: 30-Minute Cardio Kickboxing Barre Workout",
      "Day 5: 30-Minute Full Body Strength Workout",
      "Day 6: 35-Minute Full Body Strength and HIIT Workout",
      "Day 7: 25-Minute Pilates Class At Home",
      "Day 8: 40-Minute Booty Building Workout",
      "Day 9: 30-Minute Barre Blend",
      "Day 10: 20-Minute Upper Body Dumbbell Workout",
    ]
  ),
  new Information(
    "m3",
    "c3",
    "What is the best fitness program for beginners?",
    "https://www.wikihow.com/images/thumb/a/ac/Do-Kegel-Exercises-for-Men-Step-9.jpg/v4-460px-Do-Kegel-Exercises-for-Men-Step-9.jpg",
    [
      "Set Realistic Goals",
      "Choose Enjoyable Activities",
      "Start Slowly",
      "Incorporate Strength Training and Cardio",
      "Warm-up (5-10 minutes)",
      "Strength Training (2-3 times per week)",
      "Cardiovascular Exercise (3-4 times per week)",
      "Flexibility and Mobility (2-3 times per week)",
      "Rest and Recovery (2-3 days per week)",
    ]
  ),
  new Information(
    "m4",
    "c4",
    "Exercises to Help with Anxiety and Stress",
    "https://cdn.sanity.io/images/0vv8moc6/curetoday/679c331fa33db422690eb85c2c5d1343b14d8ad1-740x528.png",
    [
      "Get into a comfortable position",
      "Close your eyes for a deeper practice",
      "Starting with your feet and toes",
      "Take a nice deep breath in through your nose",
      "Work your way up the body",
      "Move progressively up your body",
    ]
  ),
];

export const NOTIFICATIONS = [
  { id: '1', title: 'Welcome to the Gym App!', date: '2024-07-01' },
  { id: '2', title: 'Your Account Was Created Successfully!', date: '2024-07-01' },
  { id: '3', title: 'New workout programs available.', date: '2024-07-10' },
];

//programms 
 const programs = [
  { id: '1', name: 'Morning Yoga', time: '07:00 - 07:30', duratin: '30 min', description: 'A yoga program to start your day off right.', intensity: 'Low' },
  { id: '2', name: 'Running', time: '08:00 - 08:45', duration: '45 min', description: 'A running session to improve your endurance.', intensity: 'Medium' },
  { id: '3', name: 'Strength Training', time: '09:00 - 10:00', duration: '60 min', description: 'A strength training program to build your muscles.', intensity: 'High' },
  { id: '4', name: 'HIIT', time: '10:30 - 10:50', duration: '20 min', description: 'A high-intensity interval training to burn calories quickly.', intensity: 'Very High' },
  { id: '5', name: 'Pilates', time: '11:00 - 11:40', duration: '40 min', description: 'A pilates program to improve your flexibility and posture.', intensity: 'Low' },
  { id: '6', name: 'Cycling', time: '12:00 - 12:50', duration: '50 min', description: 'A cycling session to work your legs and cardio.', intensity: 'Medium' },
  { id: '7', name: 'Boxing', time: '14:00 - 14:45', duration: '45 min', description: 'A boxing workout to improve your strength and endurance.', intensity: 'High' },
  { id: '8', name: 'Cardio Dance', time: '15:00 - 15:35', duration: '35 min', description: 'A cardio dance program to burn calories while having fun.', intensity: 'Medium' },
  { id: '9', name: 'Stretching', time: '16:00 - 16:25', duration: '25 min', description: 'A stretching program to improve your flexibility and prevent injuries.', intensity: 'Low' },
  { id: '10', name: 'CrossFit', time: '17:00 - 17:55', duration: '55 min', description: 'A CrossFit workout for complete physical conditioning.', intensity: 'Very High' },
];

export default programs; 

