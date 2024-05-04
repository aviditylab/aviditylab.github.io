import React from "react";

interface FaqItemProps {
  question: string
  answer: string
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (<div>
    <div className=" flex">
      <div>
        {question}
      </div>
      <div>
        +
      </div>
    </div>
    <div>
      {answer}
    </div>
  </div>)
}

export default FaqItem