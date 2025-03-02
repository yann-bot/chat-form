import { GoPerson } from "react-icons/go"
import { AiOutlineTeam } from "react-icons/ai"
import { ButtonIcon } from "./Form"

 export const FormApp = () => {
    const handleButton = (message: string) => {
        alert(message)
    }

    const handleValidation = () => {
        alert('Validation reussie !')
    }

    return (
        <div >
               <h2 className="font-bold mt-8 mb-2">Number of employees</h2>
        <div className="flex flex-col gap-3">
                {/*Button 1 */}
            <ButtonIcon 
            icon={<GoPerson />} 
            title="I'm a solo creator" 
            paragraph="I need to set up an account for myself." 
           />

            {/*Button 2 */}
            <ButtonIcon 
            icon={<AiOutlineTeam />} 
            title="I'm part of a team"
            paragraph="I need to set up an account for a team"
           
            />

            {/*Button de validation  */}

            <button className="border rounded-md mt-6 text-white pt-2 pb-2 bg-blue-600">Get in touch</button>
        </div>
        </div>
    )
}