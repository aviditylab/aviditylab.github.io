import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import Header from "../components/Header"
import Background from "../components/Background"
import MainSection from "../components/MainSection"
import VideoSection from "../components/VideoSection"
import WhoWeAre from "../components/WhoWeAre"
import WorkFlow from "../components/WorkFlow"
import Faq from "../components/Faq"
import ContactUs from "../components/ContactUs"

const IndexPage: React.FC<PageProps> = () => {

  const whoWeAreRef = React.useRef<HTMLDivElement>(null);
  const workFlowRef = React.useRef<HTMLDivElement>(null);
  const faqRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (index: number) => {
    const refs = [whoWeAreRef, workFlowRef, faqRef];
    if (refs[index] != null) {
      const ref = refs[index].current;
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <div className="snap-mandatory snap-y">
      <div className=" snap-start">
        <Background />
        <Header onHandleScroll={handleScroll} />
        <MainSection />
        <VideoSection />
      </div>
      <div className=" snap-start" ref={whoWeAreRef}>
        <WhoWeAre />
      </div>
      <div className=" snap-start" ref={workFlowRef}>
        <WorkFlow />
      </div>
      <div className=" snap-start" ref={faqRef}>
        <Faq />
      </div>
      <div className=" snap-start">
        <ContactUs />
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Avidity Lab</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"></link>
  <link href="/fonts/satoshi.css" rel="stylesheet" />
</>
