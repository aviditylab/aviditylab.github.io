import { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';
import CardImage from './CardImage';
import MediaControl from './MediaControl';
import Calendar from './Calendar';
import PaymentConfirmation from './PaymentConfirmation';
import Announcement from './Announcement';

const Backgorund = () => {
  return (
    <div className=' absolute z-0 right-0 top-44 scale-90'>
      <div className='flex flex-col gap-4 p-1 z-0' style={{ rotate: '-0.03turn' }}>
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
      <div className='z-50 w-full h-full absolute right-0 top-0 bg-gradient-to-r dark:from-dark from-light to-transparent' style={{ rotate: '-0.03turn' }}></div>
    </div>
  );
};
export default Backgorund;