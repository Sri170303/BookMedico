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
        speciality: 'General Physician',
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
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Nair is known for providing primary care services with a focus on preventive healthcare, accurate diagnosis, and patient education.',
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
        about: 'Dr. Mehta is a specialist in women\'s health, with expertise in prenatal care, reproductive health, and complex gynecological surgeries.',
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
        about: 'Dr. Sharma offers advanced skin treatments for acne, eczema, psoriasis, and cosmetic dermatology.',
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
        about: 'Dr. Iyer provides compassionate healthcare to children, from newborns to teenagers, ensuring holistic development and disease prevention.',
        fees: 400,
        address: {
            line1: 'Sector 12',
            line2: 'Noida, Uttar Pradesh'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Arjun Patel',
        image: doc5,
        speciality: 'Cardiologist',
        degree: 'MBBS, DM (Cardiology)',
        experience: '12 Years',
        about: 'Dr. Patel is an expert in treating heart-related conditions, performing interventions and promoting heart health.',
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
        speciality: 'Neurosurgeon',
        degree: 'MBBS, MCh (Neurosurgery)',
        experience: '9 Years',
        about: 'Dr. Verma specializes in complex brain and spine surgeries, with a strong focus on minimally invasive techniques.',
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
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS (Orthopedics)',
        experience: '11 Years',
        about: 'Dr. Khan has vast experience in joint replacement, sports injuries, and fracture management.',
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
        speciality: 'ENT Specialist',
        degree: 'MBBS, MS (ENT)',
        experience: '6 Years',
        about: 'Dr. Joshi treats ear, nose, and throat conditions and offers both medical and surgical solutions.',
        fees: 450,
        address: {
            line1: 'Kothrud',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Rahul Desai',
        image: doc9,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '10 Years',
        about: 'Dr. Desai provides specialized care in digestive disorders, liver diseases, and endoscopic procedures.',
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
        speciality: 'Psychiatrist',
        degree: 'MBBS, MD (Psychiatry)',
        experience: '5 Years',
        about: 'Dr. Nair supports mental health with treatment for anxiety, depression, and therapy sessions.',
        fees: 600,
        address: {
            line1: 'Kalamassery',
            line2: 'Kochi, Kerala'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Aditya Bhatt',
        image: doc11,
        speciality: 'Urologist',
        degree: 'MBBS, MS, MCh (Urology)',
        experience: '14 Years',
        about: 'Dr. Bhatt specializes in urinary tract and male reproductive system surgeries.',
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
        speciality: 'Oncologist',
        degree: 'MBBS, MD (Oncology)',
        experience: '13 Years',
        about: 'Dr. Rao focuses on cancer treatment, chemotherapy, and holistic care.',
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
        speciality: 'Endocrinologist',
        degree: 'MBBS, DM (Endocrinology)',
        experience: '7 Years',
        about: 'Dr. Sinha treats hormonal disorders including diabetes, thyroid issues, and metabolic diseases.',
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
        speciality: 'Rheumatologist',
        degree: 'MBBS, MD (Internal Medicine), DM (Rheumatology)',
        experience: '9 Years',
        about: 'Dr. Ahmed is an expert in autoimmune diseases, arthritis, and chronic joint pain management.',
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
        speciality: 'Pulmonologist',
        degree: 'MBBS, MD (Pulmonology)',
        experience: '6 Years',
        about: 'Dr. Malhotra handles respiratory illnesses like asthma, COPD, and sleep disorders.',
        fees: 650,
        address: {
            line1: 'Sector 18',
            line2: 'Gurgaon, Haryana'
        }
    }
];
