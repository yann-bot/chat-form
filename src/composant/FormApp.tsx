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
        <div>
                {/*Button 1 */}
            <ButtonIcon 
            icon={<GoPerson />} 
            title="I'm a solo creator" 
            paragraph="I need to set up an account for myself." 
            onClick={() => handleButton('Button 1 clique !')}
            />

            {/*Button 2 */}
            <ButtonIcon 
            icon={<AiOutlineTeam />} 
            title="I'm part of a team"
            paragraph="I need to set up an account for a team"
            onClick={() => handleButton("Button 2 clique !")}
            />

            {/*Button de validation  */}

            <button onClick={handleValidation}>Get in touch</button>
        </div>
        </div>
    )
}