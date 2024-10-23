import { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';

const Backgorund = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.style.scale = '0.5';
  }, [imageRef])
  return (
    <div className=' absolute z-0 w-full right-0'>
      <div className=' flex' ref={imageRef}>
        <ProfileCard />
      </div>
    </div>
  );
};
export default Backgorund;