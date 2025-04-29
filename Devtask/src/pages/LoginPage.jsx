import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Radios from "../components/Radios";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  return (
    <form className="bg-[#F7F8F9] w-[375px] h-[812px] py-7 flex flex-col justify-between p-5">
      
      <div className="space-y-4">
      <Heading title={' Create your PopX account'} />
      <Input
        lable={"Full Name"}
        type={"text"}
        placeholder={"Enter your name"}
        error={'*'}
        color={'text-[#6C25FF]'}
      />
      <Input
        lable={"Phone number"}
        type={"text"}
        placeholder={"Enter your number"}
        error={'*'}
        color={'text-[#6C25FF]'}
      />
      <Input
        lable={"Email address"}
        type={"email"}
        placeholder={"Enter your email"}
        error={'*'}
        color={'text-[#6C25FF]'}
      />

      <Input
        lable={"Password"}
        type={"password"}
        placeholder={"Enter your password"}
        error={'*'}
        color={'text-[#6C25FF]'}
      />

      <Input
        lable={"Company Name"}
        type={"text"}
        placeholder={"Enter your Company name"}
        error={'*'}
        color={'text-[#6C25FF]'}
      />
      <Radios />
      </div>
      <Button
        label={"Create Account"}
        className={"font-medium bg-[#6C25FF] h-11 rounded text-white cursor-pointer"}
        onClick={() => navigate('/profile')}
      />
    </form>
  );
}
