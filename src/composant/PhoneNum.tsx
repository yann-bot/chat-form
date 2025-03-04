import  { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <PhoneInput
      country={"us"}
      placeholder="(555)000-0000"
      value={phoneNumber}
      onChange={(phone) => setPhoneNumber(phone)}
      inputStyle={{
        // Supprime la bordure
        border: "none", // Supprime le padding à gauche
      }}
    />
  );
};

export default PhoneNumberInput;