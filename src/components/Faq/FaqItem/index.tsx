import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FaqItemProps {
  question: string
  answers: string[]
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answers }) => {
  const [show, setShow] = useState(false);
  return (<div className=" border-b-2 border-solid border-gray-700 py-3 ">
    <div className=" flex justify-between  items-center" onClick={() => setShow((prev) => !prev)}>
      <div>
        {question}
      </div>
      <div>
        {!show ? 
        <FaPlus/>
        :
        <FaMinus/>
        }
        
      </div>
    </div>
      <div className={` flex flex-col space-y-4 transition duration-150 ease-out hover:ease-in font-satoshi text-xs text-gray-500 overflow-hidden ${!show ? "h-0" : ""}`}>
        {answers.map(ans => (<div>{ans}</div>))}
      </div>
  </div>)
}

export default FaqItem