import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import WhoWeAre from "../components/WhoWeAre"
import ContactUs from "../components/ContactUs"
import Hero from "../components/Hero"
import Value from "../components/Value"
import CTA from "../components/CTA"
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

  React.useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
  return (
    <div className="snap-mandatory snap-y bg-[#F8F9FA]">
      <div className=" snap-start">
        <Hero />
      </div>
      <div className=" snap-start" ref={whoWeAreRef}>
        <WhoWeAre />
      </div>
      <div className=" snap-start" ref={workFlowRef}>
        <Value />
      </div>
      <div className=" snap-start" ref={faqRef}>
        <CTA />
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
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
  <link href="/fonts/satoshi.css" rel="stylesheet" />
</>
