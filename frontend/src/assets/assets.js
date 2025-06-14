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

export const assets = {
    logo,
    profile_pic,
    dropdown_icon,
    group_profiles,
    arrow_icon,
    header_img,
    appointment_img
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
    about: 'Dr. Nair provides general medical care, preventive health checkups, and manages chronic conditions like diabetes and hypertension.',
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
    about: 'Dr. Mehta specializes in women\'s reproductive health, prenatal care, fertility issues, and gynecological surgeries.',
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
    about: 'Dr. Sharma offers treatments for skin conditions like acne, eczema, psoriasis, and provides cosmetic dermatology services.',
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
    about: 'Dr. Iyer provides comprehensive healthcare for infants, children, and adolescents, focusing on growth and development.',
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
    about: 'Dr. Desai specializes in digestive system disorders, including acid reflux, liver diseases, and gastrointestinal infections.',
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
    about: 'Dr. Nair offers primary care consultations, annual physicals, and treatment for common illnesses and chronic conditions.',
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
    about: 'Dr. Patel provides comprehensive primary healthcare services and management of lifestyle-related diseases.',
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
    about: 'Dr. Verma treats neurological conditions such as epilepsy, migraines, multiple sclerosis, and movement disorders.',
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
    about: 'Dr. Khan specializes in pediatric medicine, ensuring the health and well-being of children through preventive and diagnostic care.',
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
    about: 'Dr. Joshi focuses on women’s reproductive health, menstrual disorders, and prenatal/postnatal care.',
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
    about: 'Dr. Bhatt treats disorders of the digestive tract, liver diseases, and provides colonoscopy and endoscopy services.',
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
    about: 'Dr. Rao manages general health concerns, offers wellness counseling, and long-term care for chronic conditions.',
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
    about: 'Dr. Sinha specializes in diagnosis and treatment of neurological disorders such as stroke, seizures, and neuropathy.',
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
    about: 'Dr. Ahmed treats various skin conditions, pigmentation issues, hair loss, and offers cosmetic dermatology services.',
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
    about: 'Dr. Malhotra offers routine health checkups, diagnosis and treatment of common ailments, and preventive care.',
    fees: 650,
    address: {
      line1: 'Sector 18',
      line2: 'Gurgaon, Haryana'
    }
  }
];
