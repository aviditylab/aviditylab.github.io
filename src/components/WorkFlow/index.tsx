import React from 'react';
import { TbPointFilled } from "react-icons/tb";

interface Props {
  // Define your component's props here
}

const WorkFlow: React.FC<Props> = ({ }) => {
  return (
    <div className='flex flex-col my-40 items-start font-livvic mx-4'>
      <div className='w-full text-lg font-bold text-center mb-10'>WORK FLOW</div>
      <div className='w-full text-sm font-semibold text-center'>Our process to make sure you got what you want</div>
    </div>
  );
};

export default WorkFlow;