import * as React from 'react'
import StartDark from './start-dark.png'
import IdeateDark from './ideate-dark.png'
import DesignDark from './design-dark.png'
import DevelopDark from './develop-dark.png'
import LaunchDark from './launch-dark.png'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from '@gsap/react';
import ScrollToPlugin from 'gsap/ScrollToPlugin'


export default function () {
  const progressPercentageRef = React.useRef<HTMLDivElement>(null);
  const valueItems = [
    {
      image: StartDark,
      title: 'Say hi to us!',
      description: 'Start your journey with a simple hello. We\'ll discuss your vision, understand your goals, and outline a clear roadmap to success. Let\'s begin this transformative journey together.'
    },
    {
      image: IdeateDark,
      title: 'Ideate',
      description: "Brainstorming is where the magic begins. We'll explore your vision, deciphering your ideas into actionable plans."
    },
    {
      image: DesignDark,
      title: 'Design',
      description: 'Design is the canvas upon which your dreams take shape. From wireframes to prototypes, we sculpt each element with precision and care, crafting experiences that captivate and inspire.'
    },
    {
      image: DevelopDark,
      title: 'Develop',
      description: 'Your digital product undergoes thorough testing to guarantee flawless performance.'
    },
    {
      image: LaunchDark,
      title: 'Launch',
      description: 'Design is the canvas upon which your dreams take shape. From wireframes to prototypes, we sculpt each element with precision and care, crafting experiences that captivate and inspire.'
    },
  ]

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);
  const valueImageItemRef = React.useRef<HTMLDivElement>(null)
  const valueDescriptionItemRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [valueDescriptionHeight, setValueDescriptionHeight] = React.useState(0);
  const [valueImageHeight, setValueImageHeight] = React.useState(0);
  const [stepNumber, setStepNumber] = React.useState(1);
  React.useEffect(() => {
    const valueDescriptionHeight = valueDescriptionItemRef.current?.children[0].clientHeight
    const valueImageHeight = valueImageItemRef.current?.children[0].clientHeight
    if (valueDescriptionHeight) setValueDescriptionHeight(valueDescriptionHeight);
    if (valueImageHeight) setValueImageHeight(valueImageHeight);
  }, [valueDescriptionItemRef.current?.children[0].clientHeight, valueImageItemRef.current?.children[0].clientHeight])

  useGSAP(
    () => {
      let containerPanels = gsap.utils.toArray('.container-panel');
      let progressPercentage = progressPercentageRef.current;
      let stepProgress = gsap.utils.toArray('#step-number');
      let tl = gsap.timeline()
      containerPanels.forEach((panel: any, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "bottom 90%",
          end: "bottom 10%",
          endTrigger: panel,
          markers: true,
          toggleActions: "play none none reverse",
          onToggle: (self) => {
            if (containerPanels.length === i + 1) return;
            tl.to(valueDescriptionItemRef.current, {
              scrollTo: valueDescriptionHeight * (i + (self.direction == 1 ? 1 : 0)),
              duration: 1
            })
            tl.to(window, {
              scrollTo: `#container-panel-${i + (self.direction == 1 ? 1 : 0)}`,
              duration: 1
            }, '<')
            tl.to(`#value-image-${i + (self.direction == 1 ? 0 : 1)}`, {
              opacity: 0,
              duration: 1
            }, '<')
            tl.to(`#value-image-${i + (self.direction == 1 ? 1 : 0)}`, {
              opacity: 1,
              duration: 1
            }, '<')
            tl.to(progressPercentage, {
              width: `${(i + (self.direction == 1 ? 2 : 1)) * 20}%`,
              duration: 1
            }, '<')
            setStepNumber(i + ((self.direction == 1 ? 2 : 1)));
            tl.to(stepProgress, {
              right: `${80 - (i + (self.direction == 1 ? 1 : 0)) * 20}%`,
              duration: 1
            }, '<')
          }
        });

      })
    },
    {
      scope: containerRef,
      dependencies: [scrollContainerRef.current, scrollContainerRef.current?.children]
    }
  );
  return (
    <div className='' ref={containerRef}>
      <div className=' top-0 sticky flex flex-col h-screen justify-around items-start text-center dark:bg-dark dark:text-white bg-light text-black z-10' >
        <div className=' text-2xl font-semibold text-center w-full z-20 py-4 dark:bg-dark'>
          <div >Your roadmap to tech venture success begins here</div>
        </div>
        <div className='flex flex-col space-y-4 lg:flex-row-reverse px-0 lg:px-40 justify-center items-center'>
          <div ref={valueImageItemRef} className='
          flex flex-col overflow-hidden  dark:bg-dark items-center h-[268px] w-full lg:w-[290px] relative mt-6 lg:flex-1'>
            {
              valueItems.map((item, index) => {
                return (
                  <div key={index} id={`value-image-${index}`} className={`${index !== 0 && 'opacity-0'} absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-full lg:w-[280px]`}>
                    <ValueImageItem key={index} {...item} />
                  </div>

                )
              })
            }
          </div>
          <div className=' h-[156px] z-10 w-full overflow-hidden lg:flex-1' ref={valueDescriptionItemRef}>
            {
              valueItems.map((item, index) => {
                return <ValueDescriptionItem key={index} {...item} />
              })
            }
          </div>

        </div>


        <div className='pb-4 w-full'>
          <div className="w-[80%] mx-auto bg-[#DEE2E6] rounded-full h-1.5 dark:bg-[#495057] relative z-20 pb-2">
            <div className=' absolute top-[-28px]' id='step-number' style={{ right: '80%' }}>Step {stepNumber}</div>
            <div className="dark:bg-[#F8F9FA] bg-[#6C757D] h-1.5 rounded-full" style={{ width: '20%' }} ref={progressPercentageRef}></div>
          </div>
        </div>
      </div>
      <div ref={scrollContainerRef} >
        {
          valueItems.map((item, index) => {
            return <div key={index} id={`container-panel-${index}`} className=' h-screen container-panel' />
          })
        }
      </div>
    </div >

  )
}
const ValueImageItem = ({ image, index }: any) => {
  return (
    <div className=' dark:bg-dark image-panel relative flex justify-center z-10'>
      <img src={image} alt="Start" className='object-scale-down h-[268px] w-[268px]' />
    </div>
  )
}
const ValueDescriptionItem = ({ title, description }: any) => {
  return (
    <div className=' dark:bg-dark panel w-full'>
      <div className='text-center text-md lg:text-lg lg:text-left flex flex-col space-y-1 pt-2 relative h-[156px]'>
        <div className=' text-xl lg:text-2xl font-semibold'>{title}</div>
        <div >{description}</div>
      </div>
    </div>
  )
}