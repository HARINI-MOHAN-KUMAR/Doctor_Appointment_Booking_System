import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";

const sampleDoctors = [
  {
    name: "Dr. Richard James",
    email: "richard@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc1.png",
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about: "Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    available: true,
    fees: 50,
    address: { line1: "17th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Emily Larson",
    email: "emily@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc2.png",
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about: "Dr. Emily Larson specializes in women's reproductive health, providing compassionate care and advanced treatment options for patients of all ages.",
    available: true,
    fees: 60,
    address: { line1: "27th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Sarah Patel",
    email: "sarah@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc3.png",
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "1 Years",
    about: "Dr. Sarah Patel is an expert dermatologist dedicated to skin health, acne treatment, cosmetic dermatology, and complex skin conditions.",
    available: true,
    fees: 30,
    address: { line1: "37th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Christopher Lee",
    email: "christopher@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc4.png",
    speciality: "Pediatricians",
    degree: "MBBS, DCH",
    experience: "2 Years",
    about: "Dr. Christopher Lee provides complete child healthcare services from newborns to adolescence, focusing on growth monitoring and vaccination.",
    available: true,
    fees: 40,
    address: { line1: "47th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Jennifer Garcia",
    email: "jennifer@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc5.png",
    speciality: "Neurologist",
    degree: "MBBS, DM",
    experience: "4 Years",
    about: "Dr. Jennifer Garcia specializes in neurological disorders, brain health, stroke management, and nerve disorders with years of clinical expertise.",
    available: true,
    fees: 50,
    address: { line1: "57th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Robert Chen",
    email: "robert@example.com",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    speciality: "Gastroenterologist",
    degree: "MBBS, MD (Gastro)",
    experience: "5 Years",
    about: "Dr. Robert Chen is a leading gastroenterologist specializing in digestive system health, liver diseases, endoscopy, and nutritional management.",
    available: true,
    fees: 70,
    address: { line1: "67th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Andrew Williams",
    email: "andrew@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc6.png",
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about: "Dr. Andrew Williams brings extensive experience in diagnosing and treating complex neurological conditions with personalized patient care.",
    available: true,
    fees: 50,
    address: { line1: "57th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Christopher Davis",
    email: "davis@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc7.png",
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about: "Dr. Christopher Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine.",
    available: true,
    fees: 50,
    address: { line1: "17th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Timothy White",
    email: "timothy@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc8.png",
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about: "Dr. Timothy White provides general and specialized gynecological services, prenatal care, and reproductive health counseling.",
    available: true,
    fees: 60,
    address: { line1: "27th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Ava Mitchell",
    email: "ava@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc9.png",
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about: "Dr. Ava Mitchell focuses on modern dermatological treatments, hair restoration, skin laser therapies, and allergy testing.",
    available: true,
    fees: 30,
    address: { line1: "37th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Jeffrey King",
    email: "jeffrey@example.com",
    image: "https://raw.githubusercontent.com/arpan-512/Prescripto-Doctor-Appointment-Booking-System/main/frontend/src/assets/doc10.png",
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about: "Dr. Jeffrey King is passionate about pediatric care, infant nutrition, child development, and preventive wellness programs.",
    available: true,
    fees: 40,
    address: { line1: "47th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  },
  {
    name: "Dr. Sophia Taylor",
    email: "sophia@example.com",
    image: "https://images.unsplash.com/photo-1594824813566-8185b378c7d8?auto=format&fit=crop&w=600&q=80",
    speciality: "Gastroenterologist",
    degree: "MBBS, FRCP",
    experience: "6 Years",
    about: "Dr. Sophia Taylor specializes in advanced gastroenterology, IBS management, gastric disorder management, and endoscopic care.",
    available: true,
    fees: 80,
    address: { line1: "67th Cross, Richmond", line2: "Circle, Ring Road, London" },
    date: Date.now()
  }
];

export const seedDoctors = async () => {
  try {
    const count = await doctorModel.countDocuments();
    if (count === 0) {
      console.log("No doctors found in database. Seeding initial doctors for all categories...");
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("doctor123", salt);

      const docsToInsert = sampleDoctors.map(doc => ({
        ...doc,
        password: hashedPassword
      }));

      await doctorModel.insertMany(docsToInsert);
      console.log(`Successfully seeded ${docsToInsert.length} doctors into MongoDB database!`);
    } else {
      console.log(`Database currently has ${count} doctors.`);
    }
  } catch (err) {
    console.error("Error seeding doctors:", err.message);
  }
};
