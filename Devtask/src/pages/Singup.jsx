import React from "react";
import Heading from "../components/Heading";
import SubParra from "../components/SubParra";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

export default function Singup() {
  const navigate = useNavigate();
  return (
    <form className="bg-[#F7F8F9] w-[375px] h-[812px] py-7 flex flex-col gap-4 p-5">
      <div>
        <Heading title={"Signin to your PopX account"} />
        <SubParra text="Lorem ipsum dolor sit amet, consectetur adipiscing elit," />
      </div>
      <Input
        type="email"
        lable="Email Address"
        placeholder="Enter email addresh"
        color={"text-[#6C25FF]"}
      />
      <Input
        type="password"
        lable="Password"
        placeholder="Enter Password"
        color={"text-[#6C25FF]"}
      />
      <Button
        label={"Login"}
        className={"h-11 rounded text-white bg-[#CBCBCB] cursor-pointer "}
        onClick={() => navigate('/profile')}
      />
    </form>
  );
}
