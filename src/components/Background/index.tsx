import { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';
import CardImage from './CardImage';
import MediaControl from './MediaControl';
import Calendar from './Calendar';
import PaymentConfirmation from './PaymentConfirmation';

const Backgorund = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.style.scale = '1';
  }, [imageRef])
  return (
    <div className=' absolute z-50 w-full right-0 bg-gray-100 h-screen'>
      <div className='flex flex-col gap-4' ref={imageRef}>
        <div className=' flex'>
          <ProfileCard />
          <CardImage />
        </div>
        <div className='ml-4'>
          <MediaControl />
        </div>
        <div className='ml-4 flex gap-4'>
          <Calendar />
          <PaymentConfirmation />
        </div>
      </div>
    </div>
  );
};
export default Backgorund;