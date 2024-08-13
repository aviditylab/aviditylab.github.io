import React from 'react';
import { TbPointFilled } from "react-icons/tb";
const WhoWeAre: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 py-40 items-start font-livvic px-10 snap-center lg:pt-60 bg-light dark:text-white text-black dark:bg-dark' >
      <div className=' flex flex-1 justify-center items-center text-xs md:text-xl'>
        <TbPointFilled /> Who are we?
      </div>
      <div className=' flex-[2] text-sm md:text-2xl'>
        A dedicated digital agency, firmly rooted in Indonesia since our establishment in 2024 — propelled by a vision to revolutionize the digital landscape. At our essence, we prioritize fostering enduring partnerships, recognizing that collaboration is pivotal to success in this dynamic industry.
      </div>
    </div>
  );
};

export default WhoWeAre;