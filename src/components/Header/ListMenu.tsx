import * as React from 'react';

const ListMenu: React.FC<{ show: boolean }> = ({ show }) => {
  const menu = ["Services", "Process", "Work", "About"]
  return (
    <div className=' flex flex-col'>
      <div>
        <div style={{
          transition: "all 0.4s ease-in-out",
          overflow: "hidden",
          height: !show ? "0" : "500px",
        }}>
          {menu.map((item, index) => (
            <div key={index}>
              {item}
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default ListMenu