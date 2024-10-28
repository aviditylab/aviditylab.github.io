import { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';
import CardImage from './CardImage';
import MediaControl from './MediaControl';
import Calendar from './Calendar';
import PaymentConfirmation from './PaymentConfirmation';
import Announcement from './Announcement';

const Backgorund = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.style.scale = '1';
    imageRef.current.style.rotate = '-0.04turn';
    imageRef.current.style.background = 'linier'
  }, [imageRef])
  return (
    <div className=' absolute z-0 right-0 top-0'>
      <div className='flex flex-col gap-4 p-1 z-0' ref={imageRef}>
        <div className=' flex'>
          <ProfileCard />
          <CardImage />
        </div>
        <div className='ml-4'>
          <MediaControl />
        </div>
        <div className='ml-4 flex gap-4 items-center'>
          <Calendar />
          <PaymentConfirmation />
        </div>
        <div className='ml-4'>
          <Announcement />
        </div>
      </div>
      <div className='z-50 w-full h-full absolute right-0 top-0' style={{ backgroundImage: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));' }}></div>
    </div>
  );
};
export default Backgorund;