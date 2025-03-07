import { FaRegCircle } from 'react-icons/fa';
import image from '../assets/images/Amelie Laurent.webp';
import PhoneNumberInput from './PhoneNum';
import { useState } from 'react';
import { z } from 'zod';
import { GoPerson } from "react-icons/go"
import { AiOutlineTeam } from "react-icons/ai"
import { ButtonIcon } from "./Bouton.tsx"


{/* Création d'interface pour éviter les erreurs de types*/}

interface FormErrors {
  firstName?: { _errors: string[] };
  lastName?: { _errors: string[] };
  jobTitle?: { _errors: string[] };
  email?: { _errors: string[] };
  phoneNumber?: { _errors: string[] };
}



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
      
      <div className="flex min-h-screen w-screen items-center justify-center  bg-gray-100 p-5 ">
        <div className="flex flex-col sm:flex-row w-full max-w-none bg-white rounded-lg shadow-lg overflow-hidden">

          {/* Form Section */}

          <div className="w-full sm:w-1/2 p-[40px] sm:p-[100px]">
            <h2 className="text-2xl font-semibold mb-4 sm:text-3xl">Chat to our team</h2>
            <p className="text-gray-600 text-[14px] mb-6 sm:text-lg">
              Need help with something? Want a demo? Get in touch 
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
              <div className="flex  items-center border-b border-gray-300 p-3 pl-3">
                <PhoneNumberInput  />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber._errors[0]}</p>}
              </div>

              <div>
              <h2 className="font-bold mt-8 mb-2">Number of employees</h2>
              <div className="flex flex-col gap-3">
              <ButtonIcon 
                icon={<GoPerson />} 
                title="I'm a solo creator" 
                paragraph="I need to set up an account for myself." 
              />
              
             
               {/*Button 2 */}
               

                <ButtonIcon 
                  icon={<AiOutlineTeam />} 
                  title="I'm part of a team" 
                  paragraph="I need to set up an account for my team."
                />
               </div>
              </div>
            <div>
            <button type='submit' className="border w-full rounded-[10px] mt-6 text-white pt-2 pb-2 bg-blue-600 hover:bg-blue-800 ">Get in touch</button>
            </div>

            </form>

            {/* FormApp Section */}

           
          </div>

          {/* Image Section */}

          <div className="hidden sm:block w-2/3 relative bg-gray-400 m-1 overflow-hidden rounded-2xl">
            <h1 className="text-2xl text-white font-bold mx-8 my-4">Untitled UI</h1>
            <img src={image} alt="business team" className="h-full w-full object-cover" />
            <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-end p-6 text-white">
              <p className="mt-4 text-xl font-bold sm:text-3xl">
                Untitled’s software helps us manage cash flow, financial reporting, and payroll with ease. It's a great solution for startups looking for an efficient way to manage their finances all-in-one.
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="font-semibold sm:text-xl">Maya Rothwell</h3>
                  <h4 className="text-sm sm:text-xl">Founder & CEO</h4>
                </div>
                <div className="flex items-center">
                  <FaRegCircle className="mr-2" />
                  <h3 className="font-semibold sm:text-xl">Open Ventures</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

