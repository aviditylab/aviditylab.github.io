import React from 'react';
import Card from './Card';

interface Props {
  // Define your component's props here
}

const WorkFlow: React.FC<Props> = ({ }) => {
  const workFlowData = [{
    title: 'Ideate',
    description: "Brainstorming is where the magic begins. We'll explore your vision, deciphering your ideas into actionable plans."
  }, {
    title: 'Design',
    description: "Design is the canvas upon which your dreams take shape. From wireframes to prototypes, we sculpt each element with precision and care, crafting experiences that captivate and inspire."
  }, {
    title: 'Develop',
    description: "Our commitment to transparency ensures you're kept informed every step of the way."
  }, {
    title: "Launch",
    description: "Your digital product undergoes thorough testing to guarantee flawless performance."
  }, {
    title: "Optimize",
    description: "We continually refine and enhance your digital presence, ensuring it remains at the forefront of innovation."
  }]
  return (
    <div className='flex flex-col my-40 items-start font-livvic mx-4'>
      <div className='w-full text-lg font-bold text-center mb-10'>WORK FLOW</div>
      <div className='w-full text-sm font-semibold text-center'>Our process to make sure you got what you want</div>
      <div className=' flex flex-col mt-20 space-y-24'>
        {workFlowData.map((data, index) => <Card number={`0${index + 1}`} title={data.title} description={data.description} />)}
      </div>
    </div>
  );
};

export default WorkFlow;