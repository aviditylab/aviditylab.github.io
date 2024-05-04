import React from "react";
import FaqItem from "./FaqItem";

const Faq: React.FC = () => {

  const faqData = [{
    question: "What separates Avidity from other software house or digital agencies?",
    answer: "At Avidity, we're dedicated to your success. With our experienced team, including hands-on cofounders and seasoned project directors, we ensure meticulous attention to detail and comprehensive design reviews. Transparency and open communication are key, guaranteeing a superior experience from start to finish. What sets us apart is our holistic approach, seamlessly integrating development expertise with branding and user experience. Our multidisciplinary teams ensure your software not only meets functional requirements but also reflects your brand identity and delivers an unparalleled user experience. We specialize in crafting scalable solutions aligned with your long-term business objectives, demonstrating our commitment to future-proofing your digital assets."
  }, {
    question: "Do you work with clients in different timezones?",
    answer: "At Avidity, we excel at collaborating across time zones. With our globally distributed team, we've mastered remote collaboration, ensuring seamless interaction worldwide. Whether you're in New York, London, Sydney, or beyond, we accommodate diverse time preferences effortlessly. We've implemented robust communication and project management strategies to overcome time zone challenges. Leveraging various collaboration tools, we ensure constant connectivity and streamlined workflows, regardless of geographical barriers. Our commitment to clear and timely communication ensures exceptional results, regardless of distance. Embracing global diversity enriches our capabilities and deepens our understanding of your unique needs."
  }, {
    question: "How much does partnership with Avidity for a development project?",
    answer: "At Avidity, we understand that each partnership is unique, and we tailor our engagement models to suit your specific requirements and budgetary considerations. We offer flexible pricing structures, including time & materials, fixed fee, and retainer-based arrangements. Following in-depth discussions and project briefings, our team collaborates with you to determine the most suitable engagement model for your needs. We then provide a customized proposal outlining the project timeline, scope, and estimated cost, ensuring transparency and alignment every step of the way."
  }, {
    question: "Do Avidity work with startups?",
    answer: "Absolutely, Avidity is proud to collaborate with startups at every stage of their journey. We're passionate about empowering early-stage ventures to realize their vision and achieve sustainable growth through innovative technology solutions. Our expertise extends beyond mere development; we offer strategic guidance and support to help startups navigate the complexities of their respective industries and emerge as industry leaders. From conceptualization to launch and beyond, we've partnered with numerous startups across various sectors, providing tailored solutions that propel them toward success. Whether you're a fledgling startup with a groundbreaking idea or a scaling company seeking to optimize your digital presence, we're here to help."
  }]

  return (
    <div>
      <div>FAQ</div>
      {
        faqData.map((item, index) => (<FaqItem key={index} question={item.question} answer={item.answer} />))
      }
    </div>
  )
}

export default Faq