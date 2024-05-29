
import React, { FC } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
interface CardProps {
  number: string;
  title: string;
  description: string;
  IconComponent: IconType;
}

const Card: React.FC<CardProps> = ({ number, title, description, IconComponent }) => {
  return (
    <div className=' md:rotate-90 md:origin-bottom-right md:w-[300px] md:h-[400px] bg-black mx-10 md:mx-0 text-white h-[400px] rounded-3xl flex flex-col justify-center text-center px-6 space-y-3 relative'>
      <div className=" bg-white h-9 w-9 rounded-full absolute right-4 top-4 flex justify-center items-center">
        <IconComponent className=" text-black" size={20} />
      </div>
      <div className=" font-livvic font-bold text-sm">{number}</div>
      <div className=" font-livvic font-bold text-sm">{title}</div>
      <div className=" font-satoshi  font-sm text-[#DEDEDE]">{description}</div>
    </div>
  );
}
export default Card