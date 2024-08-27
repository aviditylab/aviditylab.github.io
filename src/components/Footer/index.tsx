import * as React from 'react'
export default function () {
  return (
    <div className=" text-white flex flex-col justify-end h-1/5">
      <div className="flex font-livvic justify-center space-x-2 my-2">
        <a href="https://www.linkedin.com/company/aviditylab">Linkedin</a>
        <span>*</span>
        <a href="https://www.youtube.com/@aviditylab">Youtube</a>
        <span>*</span>
        <a href="https://www.instagram.com/aviditylab/">Instagram</a>
        <span>*</span>
        <a href='https://www.tiktok.com/@aviditylab'>Tiktok</a>
        <span>*</span>
        <a href='https://x.com/aviditylab'>Twitter</a>
        <span>*</span>
        <a href="https://dribbble.com/aviditylab">Dribbble</a>
        <span>*</span>
        <a href="https://www.behance.net/aviditylab">Behance</a>
      </div>
      <div className=" flex flex-col md:flex-row items-center md:mx-20 md: justify-around">
        <div className=" text-white flex justify-center space-x-2 items-center my-5">
          <div className=" font-josefinSans text-lg font-bold">Avidity Lab</div>
          <div className=' font-poppins text-xs'>Digital Product Agency</div>
        </div>
      </div>
    </div>
  )
}