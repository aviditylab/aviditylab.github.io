import * as React from 'react'
import FaqData from '../Faq/FaqData'
import FaqItem from '../Faq/FaqItem'
import Footer from '../Footer'
import useHandleToWa from '../hooks/useHandleToWa';
export default function () {

  const handleToWa = useHandleToWa();
  return (
    <div>
      <div className=' text-white p-4'>
        <div className=' border-gray-700 border-2'>
          <div className=' flex justify-between border-gray-700 p-3'>
            <div className='  font-bold text-2xl'>FAQ</div>
            <div className=' px-3 py-1 bg-[#F8F9FA] text-black rounded-full cursor-pointer' onClick={handleToWa}>
              Let's Talk
            </div>
          </div>
          {FaqData.map((item, index) => {
            return (
              <FaqItem key={index} {...item} />
            )
          })}
          <div className=' border-gray-700 border-t-2'>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  )
}