import React from 'react';
import { TbPointFilled } from "react-icons/tb";
const WhoWeAre: React.FC = () => {
  return (
    <div className=' lg:px-20 lg:justify-center flex flex-col lg:flex-row space-y-5 lg:space-y-0 py-40 items-start font-livvic px-10 snap-center lg:pt-60 bg-dark dark:bg-light  dark:text-black text-white lg:space-x-8' >
      <div className=' flex flex-none justify-end items-center text-md md:text-2xl'>
        <TbPointFilled /> Who are we?
      </div>
      <div className=' flex-1 text-sm md:text-2xl text-justify'>
        A dedicated digital agency, firmly rooted in Indonesia since our establishment in 2024 — propelled by a vision to revolutionize the digital landscape. At our essence, we prioritize fostering enduring partnerships, recognizing that collaboration is pivotal to success in this dynamic industry.
      </div>
    </div>
  );
};

export default WhoWeAre;