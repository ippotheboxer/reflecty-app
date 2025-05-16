import React from "react";

interface UserInputProps {
  name: string;
  type: string;
  required?: boolean;
  autoComplete: string;
  defaultValue: string;
  label: string;
}

const UserInput: React.FC<UserInputProps> = ({ name, type, required, autoComplete, defaultValue, label }) => {
  return (
    <div className="flex md:flex-row flex-col md:items-center items-start w-full">
      <label htmlFor={name} className="md:w-4/12 md:text-lg mb-1 md:mb-0">{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        className="!outline-none w-[250px] md:w-[430px] h-[30px] md:h-[40px] bg-[#fdfaff] rounded-full border border-solid p-2 py-4 border-[#c3adff] focus:border-purple-500 shadow-[0px_5px_20px_#4f42660d]"
      />
    </div>
  );
};

export default UserInput;
