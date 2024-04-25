import * as React from 'react';

const ListMenu: React.FC<{ show: boolean }> = ({ show }) => {
  const menu = ["Services", "Process", "Work", "About"]
  return (
    <div className=' flex flex-col mt-4'>
      <div>
        <div style={{
          transition: "height 0.4s ease-in-out",
          overflow: "hidden",
          height: !show ? "0" : "244px",
        }} className={`bg-white rounded-xl`}>
          {menu.map((item, index) => (
            <div key={index} className='p-3 font-livvic font-semibold text-sm cursor-pointer'>
              {item}
            </div>
          ))}
          <div className='m-4 p-2 bg-black cursor-pointer text-white rounded-full text-center font-livvic font-semibold text-sm'>
            Start a project
          </div>
        </div>

      </div>
    </div >

  )
}

export default ListMenu