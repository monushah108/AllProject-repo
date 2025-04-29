import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function LandingScreen() {
  const navigate = useNavigate()
  return (
    <div className="p-4  bg-[#F7F8F9] h-[700px] w-[350px] flex justify-end flex-col gap-5 ">
      <div className="w-[70%] ">
        <h1 className="text-[#1D2226] text-2xl font-semibold mb-2">
          Welcome to PopX
        </h1>
        <p className="text-[#1D2226] opacity-55 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="flex  flex-col gap-2 mb-7">
        <Button
          className={
            "bg-[#6C25FF] rounded-sm text-white h-11 text-sm cursor-pointer "
          }
          label={"Create Account"}
          
          onClick={() => navigate('/login')}
          
        />
        <Button
          className={"bg-[#6C25FF4B] rounded-sm h-11 text-sm cursor-pointer "}
          label={"Already Registered? Login"}
          onClick={() => navigate('/singup')}
        />
      </div>
    </div>
  );
}
