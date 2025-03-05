import { FaRegCircle } from 'react-icons/fa';
import image from '../assets/images/Amelie Laurent.webp';
import { FormApp } from './FormApp';
import PhoneNumberInput from './PhoneNum';
import { useState } from 'react';

{/* Création d'interface pour éviter les erreurs de types*/}

interface FormErrors {
  firstName?: { _errors: string[] };
  lastName?: { _errors: string[] };
  jobTitle?: { _errors: string[] };
  email?: { _errors: string[] };
  phoneNumber?: { _errors: string[] };
}
import { z } from 'zod';


{/* 
  Création de schema
  Gestion de validation 
  message d'erreur 
  */}

const schema = z.object({
  firstName: z.string().min(1, { message: "firstname ne peut pas être vide" }),
  lastName: z.string().min(1, { message: "lastname ne peut pas être vide" }),
  jobTitle: z.string().min(1, { message: "Job title ne peut pas être vide" }),
  email: z.string().email({ message: "adresse email invalide" }),
  phoneNumber: z.string().min(1, { message: "Phone number ne peut pas être vide" }),
});

export default function Form01() {
  const [errors, setErrors] = useState<FormErrors>({});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      {/* Utilisation de l'objet FormData pour collecter facilement les données du formulaire
          Remarquez que l'attribut a été ajouté pour chaque champ du formulaire
        */}
      const formData = new FormData(event.target as HTMLFormElement);
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        jobTitle: formData.get('jobTitle'),
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
      };

      const result = schema.safeParse(data);
      if (!result.success) {
        const fieldErrors = result.error.format();
        setErrors(fieldErrors);
      } else {
        setErrors({});

        console.log("Form data:", data);
      }
    };

    return (
      
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
        <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">

          {/* Form Section */}

          <div className="w-1/2 p-[80px]">
            <h2 className="text-2xl font-semibold mb-4 ">Chat to our team</h2>
            <p className="text-gray-600 mb-6 text-sm">
              Need help with something? Want a demo? Get in touch <br />
              with our friendly team and we'll get in touch within 2 hours.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input type="text" name="firstName" placeholder="First name" className="w-full border-b border-gray-300 p-3 pl-0 outline-none focus:border-gray-500" />
    {/* on gère une érreur sur le firstname*/} {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName._errors[0]}</p>}
                </div>
                <div className="w-1/2">
                  <input type="text" name="lastName" placeholder="Last name" className="w-full border-b border-gray-300 p-3 pl-0 outline-none focus:border-gray-500" />
           {/* on gère une érreur sur le lastname*/} {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName._errors[0]}</p>}
                </div>
              </div>
              <div>
                <input type="text" name="jobTitle" placeholder="Job title" className="w-full border-b border-gray-300 p-3 pl-0 outline-none focus:border-gray-500" />
           {/* on gère une érreur sur le Jobtitle ainsi de suite*/} {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle._errors[0]}</p>}
              </div>
              <div>
                <input type="email" name="email" placeholder="Work email" className="w-full border-b border-gray-300 p-3 pl-0 outline-none focus:border-gray-500" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email._errors[0]}</p>}
              </div>
              <div className="flex items-center border-b border-gray-300 p-3 pl-3">
                <PhoneNumberInput  />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber._errors[0]}</p>}
              </div>
            
            </form>

            {/* FormApp Section */}

            <FormApp />
          </div>

          {/* Image Section */}

          <div className="w-1/2 relative bg-gray-400 m-1  rounded-2xl">
            <h1 className="text-lg text-white font-bold mx-8 my-4">Untitled UI</h1>
            <img src={image} alt="business team" className="h-full w-full object-cover" />
            <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-end p-6 text-white">
              <p className="mt-4 text-normal font-bold">
                Untitled’s software helps us manage cash flow, financial reporting, and payroll with ease. It's a great solution for startups looking for an efficient way to manage their finances all-in-one.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="font-semibold">Maya Rothwell</h3>
                  <h4 className="text-sm">Founder & CEO</h4>
                </div>
                <div className="flex items-center">
                  <FaRegCircle className="mr-2" />
                  <h3 className="font-semibold">Open Ventures</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

