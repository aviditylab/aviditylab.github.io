import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FaqItemProps {
  question: string
  answers: string[]
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answers }) => {
  const [show, setShow] = useState(false);
  return (<div className={` border-t-2 border-solid border-gray-700 p-3 cursor-pointer ${!show ? "hover:bg-black hover:bg-opacity-50" : ""}`}
    onClick={() => setShow((prev) => !prev)}
  >
    <div className=" flex justify-between items-center " >
      <div>
        {question}
      </div>
      <div>
        {!show ?
          <FaPlus />
          :
          <FaMinus />
        }
      </div>
    </div>
    <div className={`mt-3 flex flex-col space-y-2 transition duration-150 ease-out hover:ease-in font-satoshi text-md text-gray-500 overflow-hidden hover:cursor-pointer ${!show ? "h-0" : ""}`} onClick={() => setShow((prev) => !prev)}>
      {answers.map((ans, index) => (<div key={index}>{ans}</div>))}
    </div>
  </div >)
}

export default FaqItem