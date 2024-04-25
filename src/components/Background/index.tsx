import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  return (
    <div className=' absolute z-0 w-full'>
      <StaticImage src='../../images/mainbg.webp' alt='' layout='fullWidth' />
    </div>
  )
}