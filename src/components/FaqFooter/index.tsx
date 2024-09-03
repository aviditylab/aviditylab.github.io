import * as React from 'react'
import FaqData from '../Faq/FaqData'
import FaqItem from '../Faq/FaqItem'
import Footer from '../Footer'
import useHandleToWa from '../hooks/useHandleToWa';
export default function () {

  const handleToWa = useHandleToWa();
  return (
    <div className='w-full pb-2'>
      <div className=' text-white px-4'>
        <div className=' border-gray-700 border-2 flex flex-col md:flex-row'>
          <div className=' flex justify-between border-gray-700 p-3 md:flex-col md:justify-between border-r-2'>
            <div className='  font-bold text-2xl'>FAQ</div>
            <div className=' px-3 py-1 text-nowrap bg-[#F8F9FA] text-black rounded-full cursor-pointer font-semibold hover:bg-gray-200' onClick={handleToWa}>
              Let's Talk
            </div>
          </div>
          <div className=' w-full'>
            {FaqData.map((item, index) => {
              return (
                <FaqItem key={index} {...item} index={index} />
              )
            })}
          </div>
        </div>
      </div>
      <div className=' border-gray-700 border-b-2 border-x-2 border-solid mx-4 mb-4'>
        <Footer />
      </div>
    </div>
  )
}