import React, { useEffect } from 'react';
import landingVideo from '../../images/landingVideo.mp4'
const VideoSection: React.FC = () => {

  const containerRef = React.useRef(null);
  const videoRef = React.useRef(null);
  useEffect(() => {
    handleScroll()
  }, [])
  const handleScroll = () => {
    let maxContainerHeight = 448;
    let maxVideoHeight = 280;
    let variableNumberMargin = 1
    let variableNumberContainer = 1
    if (window.innerWidth >= 768) {
      variableNumberMargin = 2
      variableNumberContainer = 1.8
      maxContainerHeight = maxContainerHeight * variableNumberContainer;
      maxVideoHeight = maxVideoHeight * variableNumberContainer;
    }

    if (containerRef.current && (containerRef.current as HTMLElement).style) {
      let marginCalc = 100
      if (scrollY > 0) {
        let calc = scrollY / 300 * variableNumberMargin;
        let calc2 = (Math.ceil(1 / calc * 10));
        if (calc2 < 100) {
          marginCalc = calc2;
        }
      }
      if (marginCalc < 10) {
        marginCalc = 10
      }
      if (window.innerWidth >= 768) {
        marginCalc += 100;
      }
      if (window.innerWidth >= 1670) {
        marginCalc += 50;
      }
      (containerRef.current as HTMLElement).style.marginLeft = `${marginCalc}px`;
      (containerRef.current as HTMLElement).style.marginRight = `${marginCalc}px`;
      (containerRef.current as HTMLElement).style.height = `${maxContainerHeight}px`;
    }

    if (videoRef.current && (videoRef.current as HTMLElement).style) {
      let heightCalc = maxVideoHeight
      if (scrollY > 0) {
        let calc = scrollY * 1.9 + 200;
        let calc2 = maxVideoHeight + calc;
        if (calc2 >= maxContainerHeight) {
          heightCalc = maxContainerHeight;
        } else {
          heightCalc = calc2;
        }
      }
      (videoRef.current as HTMLElement).style.height = `${heightCalc}px`;

    };
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" pt-[85vh] md:pt-[100vh] flex justify-center mb-40">
      <div className='relative w-full h-[448px] rounded-xl overflow-hidden mx-20 z-20' ref={containerRef}>
        <div style={{
          position: "absolute",
          left: "50%"
        }}>
          <video autoPlay loop muted style={{
            "position": "relative",
            "height": 280,
            "maxWidth": "none",
            "left": "-50%"
          }} ref={videoRef}>
            <source src={landingVideo} type="video/mp4" />
          </video>

        </div>
      </div>
    </div>
  );
};

export default VideoSection;