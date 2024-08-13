import * as React from 'react'
import StartDark from './start-dark.png'
import IdeateDark from './ideate-dark.png'
import DesignDark from './design-dark.png'
import DevelopDark from './develop-dark.png'
import LaunchDark from './launch-dark.png'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: 0,
    height: 0,
  });
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const ValueImageItem = ({ image }: any) => {
  return (

    <div className='w-[100vw] relative dark:bg-dark image-panel'>
      <div className=' px-8 flex justify-center relative z-10 dark:bg-dark'>
        <img src={image} alt="Start" />
      </div>
    </div>
  )
}
const ValueDescriptionItem = ({ title, description }: any) => {
  return (
    <div className='w-[100vw] relative dark:bg-dark panel'>
      <div className='text-center flex flex-col space-y-4 pt-4 relative z-0'>
        <div className=' text-xl font-semibold'>{title}</div>
        <div >{description}</div>
      </div>
    </div>
  )
}

export default function () {
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

  gsap.registerPlugin(ScrollTrigger);
  const valueImageItemRef = React.useRef<HTMLDivElement>(null)
  const valueDescriptionItemRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [valueDescriptionHeight, setValueDescriptionHeight] = React.useState(0);
  const [valueImageHeight, setValueImageHeight] = React.useState(0);
  React.useEffect(() => {
    const valueDescriptionHeight = valueDescriptionItemRef.current?.children[0].clientHeight
    const valueImageHeight = valueImageItemRef.current?.children[0].clientHeight
    if (valueDescriptionHeight) setValueDescriptionHeight(valueDescriptionHeight);
    if (valueImageHeight) setValueImageHeight(valueImageHeight);
  }, [valueDescriptionItemRef.current?.children[0].clientHeight, valueImageItemRef.current?.children[0].clientHeight])

  useGSAP(
    () => {
      if (!containerRef || !containerRef.current) return;
      if (!valueDescriptionItemRef || !valueDescriptionItemRef.current) return;
      let panels = gsap.utils.toArray(".panel");
      console.log(panels);
      if (panels.length < valueItems.length) return;
      return gsap.to(panels, {
        yPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          start: 'top top',
          trigger: containerRef.current,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 'labels',
          },
          end: () => {
            console.log(valueDescriptionItemRef.current?.offsetHeight)
            return "+=" + (valueDescriptionItemRef.current?.offsetHeight || 0)
          },
        }
      });
    },
    {
      scope: containerRef,
      dependencies: [valueDescriptionItemRef.current, valueDescriptionItemRef.current?.children]
    }
  );

  const { height, width } = useWindowSize();
  React.useEffect(() => {
    ScrollTrigger.refresh();
  }, [height, width])
  return (
    <div className='flex flex-col justify-around items-start space-y-8 py-4 text-center dark:bg-dark dark:text-white bg-light text-black z-10' ref={containerRef}>
      <div className=' text-2xl font-semibold text-center w-full'>Your roadmap to tech venture success begins here</div>
      <div ref={valueImageItemRef} className='
          flex flex-col overflow-hidden'
        style={{ height: valueImageHeight }}
      >
        {
          valueItems.map((item, index) => {
            return <ValueImageItem key={index} {...item} />
          })
        }
      </div>
      <div ref={valueDescriptionItemRef} className='
          flex flex-col overflow-hidden
        ' style={{ height: valueDescriptionHeight }} >
        {
          valueItems.map((item, index) => {
            return <ValueDescriptionItem key={index} {...item} />
          })
        }
      </div>

      <div className="w-[80%] mx-auto bg-[#DEE2E6] rounded-full h-1.5 dark:bg-[#495057] relative z-20">
        <div className=' absolute top-[-28px]' style={{ right: '80%' }}>Step 1</div>
        <div className="dark:bg-[#F8F9FA] h-1.5 rounded-full" style={{ width: '20%' }}></div>
      </div>
    </div>
  )
}