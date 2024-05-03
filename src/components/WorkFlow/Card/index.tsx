
import React from "react";

interface CardProps {
  number: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ number, title, description }) => {
  return (
    <div className=' bg-black mx-10 text-white h-[400px] rounded-3xl flex flex-col justify-center text-center px-6 space-y-3'>
      <div className=" font-livvic font-bold text-sm">{number}</div>
      <div className=" font-livvic font-bold text-sm">{title}</div>
      <div className=" font-satoshi  font-sm text-[#DEDEDE]">{description}</div>
    </div>
  );
}
export default Card