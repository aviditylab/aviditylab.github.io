import React, { useEffect, useRef } from 'react';
import Card from './Card';
import { FaCode, FaRocket, FaSeedling, FaTools } from 'react-icons/fa';
import { MdDesignServices } from "react-icons/md";
import { IconType } from 'react-icons';
import { desktopUtilityGsap, mobileUtilityGsap } from './gsapUtil';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

interface WorkflowDataType {
  title: string;
  description: string;
  IconComponent: IconType;
}
const WorkFlow: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

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
  const workFlowRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {

      let panels = gsap.utils.toArray(".panel");
      if (window.innerWidth < 640) return;
      if (panels.length < workFlowData.length) return;
      console.log(containerRef.current?.offsetWidth);
      return gsap.to(panels, {
        xPercent: -100 * (panels.length),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => "+=" + ((containerRef.current?.offsetWidth || 0) * 1),
        }
      });
    },
    { scope: containerRef, dependencies: [workFlowRef.current, workFlowRef.current?.children] }
  );


  return (
    <div className='my-40 md:my-0 relative md:h-screen md:overflow-hidden items-start font-livvic mx-4 md:mx-0 snap-start' ref={containerRef}>
      <div className='w-full text-lg md:text-3xl font-bold text-center mb-10'>WORK FLOW</div>
      <div className='w-full text-sm md:text-2xl font-semibold text-center'>Our process to make sure you got what you want</div>
      <div className=' md:min-h-[900px] md:absolute top-0'>
        <div className=' 
          md:space-y-0 md:mt-60
          flex flex-col md:flex-row md:space-x-40 mt-20 space-y-24 md:mx-80' ref={workFlowRef}>
          {workFlowData.map((data, index) => (<div className='panel' key={index}><Card number={`0${index + 1}`} title={data.title} description={data.description} IconComponent={data.IconComponent} /></div>))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;