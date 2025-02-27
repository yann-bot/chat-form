import { FaRegUser } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FcCdLogo } from "react-icons/fc";
import logo  from './image.jpg'
export default function Form01(){
    return(
        
              <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
                <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Form Section */}
                  <div className="flex flex-col w-1/2 p-8">
                    <h2 className="text-2xl font-semibold mb-4">Chat to our team</h2>

                    <p className="text-gray-600 mb-6">Need help with something? Want a demo? Get in touch with our friendly team and we'll get in touch within 2 hours.</p>
                    <form className="space-y-4 " >

                      <div className="flex space-x-6 items-center ">
                        <div className="border-b">
                            <input type="text" placeholder="First name" className="w-1/2 p-3 appearance-none bg-transparent border-none " />
                            <input type="text" placeholder="Last name" className="w-1/2 p-3 appearance-none bg-transparent border-none border-b" />
                        </div>

                       
                        
                      </div>

                       <div div className=" border-b">
                          <input type="text" placeholder="Job title" className="w-full p-3 appearance-none bg-transparent border-none" />  
                       </div > 
                       <div className="border-b">
                          <input type="email" placeholder="Work email" className="w-full p-3 appearance-none bg-transparent border-none" />
                       </div>

                      <div className="flex space-x-4 items-center border-b">
                        <span className="text-gray-600">US</span>
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full p-3 appearance-none bg-transparent border-none" />
                      </div>

                   

                     
                    </form>
                  </div>

                  {/* Image Section */}
                 
                  <div className="w-1/2 relative">
                 
                    <img 
                      src={logo} 
                      alt="business team" 
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to- flex justify-around ">
                        <div flex justify-around>
                            <h3>
                                <FcCdLogo/>
                                  Logo
                            </h3> 
                          
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-lg font-semibold">Untitled UI</h3>
                            <p className="mt-2">Untitled’s software helps us manage cash flow, financial reporting, and payroll with ease. It's a great solution for startups looking for an efficient way to manage their finances all-in-one.</p>
                    <div className="flex justify-between ">
                        <div>
                            <p className="mt-2 font-semibold">Maya Rothwell</p>
                            <p className="text-sm">Founder & CEO</p>
                        </div>

                        <div>
                            Openvertus
                        </div>
                  
                    </div>
          </div>
             </div>
           </div>
         </div> 
    )
}