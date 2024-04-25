import React, { useEffect } from 'react';
import landingVideo from '../../images/landingVideo.mp4'
const VideoSection: React.FC = () => {

  const containerRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const handleScroll = () => {
    if (containerRef.current && (containerRef.current as HTMLElement).style) {
      let marginCalc = 80
      if (scrollY > 0) {
        let calc = scrollY / 300;
        let calc2 = (Math.ceil(1 / calc * 10));
        if (calc2 < 80) {
          marginCalc = calc2;
        }
      }
      if (marginCalc < 10) {
        marginCalc = 10
      }
      (containerRef.current as HTMLElement).style.marginLeft = `${marginCalc}px`;
      (containerRef.current as HTMLElement).style.marginRight = `${marginCalc}px`;
    }

    if (videoRef.current && (videoRef.current as HTMLElement).style) {
      let heightCalc = 280
      if (scrollY > 0) {
        let calc = scrollY / 313 * 100 * 1.9;
        let calc2 = 280 + calc;
        if (calc2 >= 448) {
          heightCalc = 448;
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
    <div className=" pt-[85vh] flex justify-center">
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