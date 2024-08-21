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

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);
  const valueImageItemRef = React.useRef<HTMLDivElement>(null)
  const valueDescriptionItemRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
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
      let containerPanels = gsap.utils.toArray('.container-panel');
      let tl = gsap.timeline()
      containerPanels.forEach((panel: any, i) => {
        // gsap.to(panel, {
        //   start: () => "top top",
        //   end: () => "+=" + (panel.offsetHeight || 0),
        //   scrollTo: { y: panel, autoKill: false },
        //   duration: 3,
        //   scrollTrigger: {
        //     markers: true,
        //     trigger: panel,
        //     start: "top bottom-=1",
        //     end: "bottom top+=1",
        //     scrub: true,
        //     onEnter: () => {
        //       console.log('enter');
        //     },
        //     invalidateOnRefresh: true,
        //   }
        // })
        ScrollTrigger.create({
          trigger: panel,
          start: "bottom 90%",
          end: "bottom 10%",
          toggleActions: "restart none none reverse",
          markers: true,
          onEnterBack: (self) => {
            tl.to(window, {
              scrollTo: `#container-panel-${i}`,
              duration: 1
            })
          },
          onEnter: (self) => {
            if(containerPanels.length === i+1) return;
            tl.to(window, {
              scrollTo: `#container-panel-${i+1}`,
              duration: 1
            })
          }
        });
        
      })
    },
    {
      scope: containerRef,
      dependencies: [scrollContainerRef.current, scrollContainerRef.current?.children]
    }
  );

  // const { height, width } = useWindowSize();
  // React.useEffect(() => {
  //   ScrollTrigger.refresh();
  // }, [height, width])
  return (
    <div className='' ref={containerRef}>
      <div className=' top-0 sticky flex flex-col justify-between h-screen items-start text-center dark:bg-dark dark:text-white bg-light text-black z-10' >
        <div className=' text-2xl font-semibold text-center w-full z-20 py-4 dark:bg-dark'>
          <div >Your roadmap to tech venture success begins here</div>
          <div ref={valueImageItemRef} className='
          flex flex-col overflow-hidden  dark:bg-dark'
            style={{ height: valueImageHeight }}
          >
            {
              valueItems.map((item, index) => {
                return <ValueImageItem key={index} {...item} />
              })
            }
          </div>
        </div>
        <div className=' h-[156px] z-10 overflow-hidden'>
          {
            valueItems.map((item, index) => {
              return <ValueDescriptionItem key={index} {...item} />
            })
          }
        </div>


        <div className='pb-4 w-full'>
          <div className="w-[80%] mx-auto bg-[#DEE2E6] rounded-full h-1.5 dark:bg-[#495057] relative z-20 pb-2">
            <div className=' absolute top-[-28px]' style={{ right: '80%' }}>Step 1</div>
            <div className="dark:bg-[#F8F9FA] h-1.5 rounded-full" style={{ width: '20%' }}></div>
          </div>
        </div>
      </div>
      <div ref={scrollContainerRef}>
        {
          valueItems.map((item, index) => {
            return <div id={`container-panel-${index}`} className=' h-screen container-panel' />
          })
        }
      </div>
    </div>

  )
}
const ValueImageItem = ({ image }: any) => {
  return (
    <div className=' relative dark:bg-dark image-panel'>
      <div className=' px-8 flex justify-center relative z-10 dark:bg-dark'>
        <img src={image} alt="Start" />
      </div>
    </div>
  )
}
const ValueDescriptionItem = ({ title, description }: any) => {
  return (
    <div className=' dark:bg-dark panel'>
      <div className='text-center flex flex-col space-y-1 pt-2 relative h-[156px]'>
        <div className=' text-xl font-semibold'>{title}</div>
        <div >{description}</div>
      </div>
    </div>
  )
}