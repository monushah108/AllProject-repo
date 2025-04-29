import React from "react";

export default function Input({ lable, type, placeholder, error , color }) {
  return (
    <fieldset className="w-full rounded-md border border-gray-300 px-2  ">
      <legend className={`text-xs font-normal px-1 ${color}`} >
        {lable}<span className="text-red-500">{error}</span>
      </legend>
      <input
        type={type}
        placeholder={placeholder}
        required
        className="outline-none w-full p-1 placeholder:text-[#919191] text-sm placeholder:text-sm placeholder:font-normal"
      />
    </fieldset>
  );
}
