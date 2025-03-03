import { FaRegCircle } from 'react-icons/fa';
import image from '../assets/images/Amelie Laurent.webp';
import { FormApp } from './FormApp';

export default function Form01() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Form Section */}

        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-semibold mb-4">Chat to our team</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Need help with something? Want a demo? Get in touch <br />
            with our friendly team and we'll get in touch within 2 hours.
          </p>

          <form className="space-y-4">
            <div className="flex space-x-4">
              <input type="text" placeholder="First name" className="w-1/2 border-b border-gray-300 p-3 outline-none focus:border-gray-500" />
              <input type="text" placeholder="Last name" className="w-1/2 border-b border-gray-300 p-3 outline-none focus:border-gray-500" />
            </div>
            <input type="text" placeholder="Job title" className="w-full border-b border-gray-300 p-3 outline-none focus:border-gray-500" />
            <input type="email" placeholder="Work email" className="w-full border-b border-gray-300 p-3 outline-none focus:border-gray-500" />
            <div className="flex items-center border-b border-gray-300 p-3">
              <span className="text-gray-600 mr-3">US</span>
              <input type="tel" placeholder="+1 (555) 000-0000" className="w-full outline-none" />
            </div>
          </form>

          {/* FormApp Section */}

          <FormApp />
        </div>

        {/* Image Section */}

        <div className="w-1/2 relative bg-gray-400 m-1 rounded-2xl">
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
