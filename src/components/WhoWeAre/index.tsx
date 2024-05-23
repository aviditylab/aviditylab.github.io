import React from 'react';
import { TbPointFilled } from "react-icons/tb";

interface Props {
  // Define your component's props here
}

const WhoWeAre: React.FC<Props> = ({ }) => {
  return (
    <div className='flex my-40 items-start font-livvic mx-4'>
      <div className=' flex flex-1 justify-center items-center text-xs md:text-sm'>
        <TbPointFilled /> Who are we?
      </div>
      <div className=' flex-[2] text-sm md:text-xl font-semibold'>
        A dedicated digital agency, firmly rooted in Indonesia since our establishment in 2024 — propelled by a vision to revolutionize the digital landscape. At our essence, we prioritize fostering enduring partnerships, recognizing that collaboration is pivotal to success in this dynamic industry.
      </div>
    </div>
  );
};

export default WhoWeAre;