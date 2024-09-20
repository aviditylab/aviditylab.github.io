import React, { useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import ProfileCard from './ProfileCard';

export default () => {
  return (
    <div className=' absolute z-0 w-full'>
      <div className=' flex'>
        <ProfileCard />

      </div>
    </div>
  )
}