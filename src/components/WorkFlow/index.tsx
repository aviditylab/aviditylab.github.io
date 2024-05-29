import React from 'react';
import Card from './Card';
import { FaCode, FaRocket, FaSeedling, FaTools } from 'react-icons/fa';
import { MdDesignServices } from "react-icons/md";
import { IconType } from 'react-icons';

interface WorkflowDataType {
  title: string;
  description: string;
  IconComponent: IconType;
}
const WorkFlow: React.FC = () => {

  const workFlowData: WorkflowDataType[] = [{
    IconComponent: FaSeedling,
    title: 'Ideate',
    description: "Brainstorming is where the magic begins. We'll explore your vision, deciphering your ideas into actionable plans."
  }, {
    IconComponent: MdDesignServices,
    title: 'Design',
    description: "Design is the canvas upon which your dreams take shape. From wireframes to prototypes, we sculpt each element with precision and care, crafting experiences that captivate and inspire."
  }, {
    title: 'Develop',
    description: "Our commitment to transparency ensures you're kept informed every step of the way.",
    IconComponent: FaCode
  }, {
    IconComponent: FaRocket,
    title: "Launch",
    description: "Your digital product undergoes thorough testing to guarantee flawless performance."
  }, {
    IconComponent: FaTools,
    title: "Optimize",
    description: "We continually refine and enhance your digital presence, ensuring it remains at the forefront of innovation."
  }]
  return (
    <div className='my-40 md:my-0 md:h-screen items-start font-livvic mx-4 md:mx-0 relative snap-start' >
      <div className='w-full text-lg md:text-3xl font-bold text-center mb-10'>WORK FLOW</div>
      <div className='w-full text-sm md:text-2xl font-semibold text-center'>Our process to make sure you got what you want</div>
      <div className=' md:h-screen md:w-screen md:absolute top-0'>
        <div className='
          md:workFlow md:space-y-0 md:mt-0
          flex flex-col mt-20 space-y-24'>
          {workFlowData.map((data, index) => <Card number={`0${index + 1}`} title={data.title} description={data.description} IconComponent={data.IconComponent} />)}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;