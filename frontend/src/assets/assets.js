import logo from './logo.svg'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
import group_profiles from './group_profiles.png'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import pediatrician from './Pediatricians.svg'
import dermatologist from './Dermatologist.svg'
import gynecologist from './Gynecologist.svg'
import neurologist from './Neurologist.svg'
import gastroenterologist from './Gastroenterologist.svg'
import general_physician from './General_physician.svg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import appointment_img from './appointment_img.png'
import verified_icon from './verified_icon.svg'
import info_icon from './info_icon.svg'
import about_img from './about_img.png'
import contact_us from './contact_us.png'

export const assets = {
    logo,
    profile_pic,
    dropdown_icon,
    group_profiles,
    arrow_icon,
    header_img,
    appointment_img,
    verified_icon,
    info_icon,
    about_img,
    contact_us
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: general_physician
    },
    {
        speciality: 'Dermatologist',
        image: dermatologist
    },
    {
        speciality: 'Neurologist',
        image: neurologist,
    },
    {
        speciality: 'Pediatrician',
        image: pediatrician,
    },
    {
        speciality: 'Gynecologist',
        image: gynecologist,
    },
    {
        speciality: 'Gastroenterologist',
        image: gastroenterologist,
    }
]

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Rajeev Nair',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS, MD (General Medicine)',
    experience: '4 Years',
    about: 'Dr. Rajeev Nair is a dedicated general physician with a focus on preventive care and chronic disease management. With his qualifications in MBBS and MD in General Medicine, he offers expert treatment for conditions such as hypertension, diabetes, and respiratory infections. Dr. Nair emphasizes patient education and lifestyle modifications to support long-term health. His approach integrates routine checkups, personalized care plans, and up-to-date medical knowledge to ensure comprehensive and compassionate care for his patients.',
    fees: 500,
    address: {
      line1: 'JP Nagar',
      line2: 'Bangalore, Karnataka'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Anjali Mehta',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD (Gynecology)',
    experience: '10 Years',
    about: 'Dr. Anjali Mehta is a highly experienced gynecologist who specializes in women’s reproductive health. Holding an MD in Gynecology, she provides expert care in prenatal and postnatal care, menstrual irregularities, fertility issues, and menopause management. Dr. Mehta is known for her compassionate approach and personalized treatment plans. She performs a range of gynecological procedures and supports women through all stages of life with evidence-based practices and a commitment to patient well-being and empowerment.',
    fees: 600,
    address: {
      line1: 'Saket Main Road',
      line2: 'New Delhi'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Rohan Sharma',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '7 Years',
    about: 'Dr. Rohan Sharma is a skilled dermatologist who specializes in diagnosing and treating a wide range of skin, hair, and nail conditions. With an MD in Dermatology, he addresses issues such as acne, eczema, psoriasis, and fungal infections, as well as providing advanced cosmetic treatments like chemical peels and laser therapy. Dr. Sharma’s approach is rooted in clinical excellence and a deep understanding of dermatological science, ensuring personalized treatment for both medical and aesthetic skin concerns.',
    fees: 550,
    address: {
      line1: 'MG Road',
      line2: 'Bangalore'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Kavita Iyer',
    image: doc4,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD (Pediatrics)',
    experience: '8 Years',
    about: 'Dr. Kavita Iyer is a dedicated pediatrician who focuses on providing holistic healthcare to infants, children, and adolescents. With an MD in Pediatrics, she has extensive experience in managing childhood illnesses, growth and development assessments, immunizations, and nutritional counseling. Dr. Iyer believes in building strong relationships with families and children, ensuring a nurturing and friendly environment. Her goal is to support children\'s health through proactive care, timely interventions, and ongoing developmental guidance.',
    fees: 400,
    address: {
      line1: 'Sector 12',
      line2: 'Noida, Uttar Pradesh'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr. Rahul Desai',
    image: doc9,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM (Gastroenterology)',
    experience: '10 Years',
    about: 'Dr. Rahul Desai is a gastroenterologist with a DM in Gastroenterology and over a decade of experience in diagnosing and managing digestive system disorders. He treats conditions such as acid reflux, liver cirrhosis, inflammatory bowel disease, and gastrointestinal infections. Dr. Desai is also skilled in performing endoscopic procedures for diagnostic and therapeutic purposes. His patient-centric approach, combined with clinical precision, ensures effective and compassionate care for all gastrointestinal health needs.',
    fees: 800,
    address: {
      line1: 'Ashok Nagar',
      line2: 'Hyderabad, Telangana'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. Priya Nair',
    image: doc10,
    speciality: 'General physician',
    degree: 'MBBS, MD (General Medicine)',
    experience: '5 Years',
    about: 'Dr. Priya Nair is a general physician with a passion for providing comprehensive primary care. With an MD in General Medicine, she treats a wide range of conditions including fever, infections, hypertension, and chronic diseases. Dr. Nair advocates for preventive healthcare and focuses on patient lifestyle improvement. Her approachable demeanor and thorough consultations make her a trusted name among patients seeking accurate diagnosis and effective treatment for their everyday health concerns.',
    fees: 600,
    address: {
      line1: 'Kalamassery',
      line2: 'Kochi, Kerala'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Arjun Patel',
    image: doc5,
    speciality: 'General physician',
    degree: 'MBBS, MD (General Medicine)',
    experience: '12 Years',
    about: 'Dr. Arjun Patel brings over a decade of expertise as a general physician. Holding an MD in General Medicine, he excels in managing acute illnesses, lifestyle diseases, and preventive healthcare. He conducts thorough assessments and tailors treatment plans to suit individual needs. Dr. Patel promotes wellness through early diagnosis, chronic disease control, and regular health monitoring. His commitment to patient education and long-term health planning ensures consistent and trustworthy medical support.',
    fees: 1000,
    address: {
      line1: 'Bandra Kurla Complex',
      line2: 'Mumbai, Maharashtra'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Nidhi Verma',
    image: doc6,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '9 Years',
    about: 'Dr. Nidhi Verma is an experienced neurologist with a DM in Neurology and a focus on complex neurological disorders. She provides advanced care for epilepsy, migraines, stroke, multiple sclerosis, and movement disorders like Parkinson’s disease. Dr. Verma integrates clinical expertise with neuroimaging and diagnostic techniques to ensure accurate assessments. Her empathetic approach and in-depth knowledge make her a trusted specialist for patients seeking relief and management of long-term neurological conditions.',
    fees: 1200,
    address: {
      line1: 'VIP Road',
      line2: 'Kolkata, West Bengal'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Sameer Khan',
    image: doc7,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD (Pediatrics)',
    experience: '11 Years',
    about: 'Dr. Sameer Khan is a seasoned pediatrician who has dedicated over a decade to child health. With an MD in Pediatrics, he is skilled in managing both acute and chronic childhood diseases, ensuring developmental milestones, and administering immunizations. Dr. Khan emphasizes preventive healthcare, parental guidance, and early detection of potential health issues. His child-friendly manner and deep clinical insight help create a comfortable environment for young patients and their families.',
    fees: 700,
    address: {
      line1: 'Nungambakkam High Road',
      line2: 'Chennai, Tamil Nadu'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Sneha Joshi',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD (Gynecology)',
    experience: '6 Years',
    about: 'Dr. Sneha Joshi is a compassionate gynecologist focused on promoting women’s reproductive health. With an MD in Gynecology, she specializes in managing menstrual disorders, pregnancy care, hormonal imbalances, and gynecological surgeries. Dr. Joshi is committed to providing personalized care, respecting patient privacy, and supporting women through every stage of life. She integrates modern techniques and empathetic communication to offer high-quality care in both preventive and curative gynecology.',
    fees: 450,
    address: {
      line1: 'Kothrud',
      line2: 'Pune, Maharashtra'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. Aditya Bhatt',
    image: doc11,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM (Gastroenterology)',
    experience: '14 Years',
    about: 'Dr. Aditya Bhatt is a senior gastroenterologist with vast experience in managing digestive and liver diseases. With a DM in Gastroenterology, he treats conditions like GERD, irritable bowel syndrome, ulcers, and hepatitis. Dr. Bhatt is proficient in conducting endoscopic and colonoscopic procedures for accurate diagnosis and intervention. He emphasizes dietary counseling and long-term gastrointestinal wellness, combining medical expertise with a patient-focused approach to deliver exceptional care.',
    fees: 900,
    address: {
      line1: 'Hiran Magri',
      line2: 'Udaipur, Rajasthan'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. Meenakshi Rao',
    image: doc12,
    speciality: 'General physician',
    degree: 'MBBS, MD (General Medicine)',
    experience: '13 Years',
    about: 'Dr. Meenakshi Rao is a trusted general physician with over a decade of experience in treating a variety of medical conditions. With an MD in General Medicine, she specializes in managing hypertension, diabetes, respiratory ailments, and routine infections. Dr. Rao is committed to wellness counseling and preventive healthcare, often working with patients on long-term chronic disease management. Her personalized and methodical approach ensures optimal health outcomes for individuals of all ages.',
    fees: 1500,
    address: {
      line1: 'Civil Lines',
      line2: 'Nagpur, Maharashtra'
    }
  },
  {
    _id: 'doc13',
    name: 'Dr. Vikas Sinha',
    image: doc13,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '7 Years',
    about: 'Dr. Vikas Sinha is a neurologist who specializes in diagnosing and managing complex neurological conditions. With a DM in Neurology, he has expertise in treating strokes, seizures, neuropathies, and neurodegenerative disorders. Dr. Sinha utilizes modern neurodiagnostic tools and evidence-based treatments to deliver high-quality care. He is dedicated to improving patient quality of life through early intervention, rehabilitation planning, and empathetic support tailored to each neurological case.',
    fees: 700,
    address: {
      line1: 'Patliputra Colony',
      line2: 'Patna, Bihar'
    }
  },
  {
    _id: 'doc14',
    name: 'Dr. Farah Ahmed',
    image: doc14,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '9 Years',
    about: 'Dr. Farah Ahmed is a dermatologist with deep expertise in treating a broad range of skin and hair conditions. With an MD in Dermatology, she provides solutions for pigmentation, acne, fungal infections, and hair loss. Dr. Ahmed is also experienced in aesthetic procedures such as chemical peels, microneedling, and laser treatments. Her commitment to skin health, patient satisfaction, and continual learning ensures that her patients receive the most advanced dermatological care available.',
    fees: 850,
    address: {
      line1: 'Hazratganj',
      line2: 'Lucknow, Uttar Pradesh'
    }
  },
  {
    _id: 'doc15',
    name: 'Dr. Karan Malhotra',
    image: doc15,
    speciality: 'General physician',
    degree: 'MBBS, MD (General Medicine)',
    experience: '6 Years',
    about: 'Dr. Karan Malhotra is a general physician with a strong foundation in internal medicine, holding an MD in General Medicine. He offers routine health checkups, acute illness care, and chronic disease management, with a focus on hypertension, diabetes, and infectious diseases. Dr. Malhotra’s treatment approach emphasizes patient education, preventive care, and lifestyle modifications. His warm demeanor and clinical expertise make him a dependable choice for comprehensive family healthcare.',
    fees: 650,
    address: {
      line1: 'Sector 18',
      line2: 'Gurgaon, Haryana'
    }
  }
];
