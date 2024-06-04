import { useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { HiVolumeUp } from "react-icons/hi";
import Typed from 'typed.js';
import useSound from 'use-sound';
import aviditylabSound from './aviditylab.mp3';

const MyComponent: React.FC = () => {
  const [play] = useSound(aviditylabSound);
  const mainRef = React.useRef(null);

  const opacityRef = React.useRef(null);
  const handleScroll = () => {
    if (opacityRef.current && (opacityRef.current as HTMLElement).style) {
      (opacityRef.current as HTMLElement).style.opacity = `${1 - (scrollY / 300)}`;
    }
    if (mainRef.current && (mainRef.current as HTMLElement).style) {
      let paddingTop = scrollY + (innerHeight * 0.5);
      paddingTop = paddingTop > screen.height ? screen.height : paddingTop;
      (mainRef.current as HTMLElement).style.paddingTop = `${paddingTop}px`
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <div className='pt-[50vh] absolute w-full z-10 ' ref={mainRef}>
        <div className=' text-black relative flex flex-col '>
          <div className='opacity-100' ref={opacityRef} >
            <div className='flex space-x-1 text-sm md:text-xl text-center justify-center'>
              <div className=' font-livvic font-semibold'>
                Hi, welcome to
              </div>
              <div className=' font-josefinSans font-bold '>
                Avidity <span className=' font-normal'>Lab</span>
              </div>
              <div className=' font-livvic cursor-pointer' onClick={() => play()}>
                [uh-vi-duh-tee læb]
              </div>
              <div className='mt-[3px] cursor-pointer' onClick={() => play()}>
                <HiVolumeUp />
                <audio src='' />
              </div>
            </div>
            <div className=' font-livvic text-lg font-bold text-center mt-4 md:text-3xl'>
              A Digital Product Agency
            </div>
            <div className=' font-livvic font-bold text-xl md:text-2xl  flex space-x-1 justify-center'>
              <div className=' text-black text-opacity-50'>that</div>
              <AnimateTextMain />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimateTextMain: React.FC = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['craft unique solutions', 'develop scalable platforms', 'designs seamless experience'],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: '/',
      loop: true,
      backDelay: 3000

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="">
      <span ref={el} />
    </div>
  );
}

export default MyComponent;