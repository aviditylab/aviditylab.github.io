import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import Header from "../components/Header"
import Background from "../components/Background"
import MainSection from "../components/MainSection"
import VideoSection from "../components/VideoSection"
import WhoWeAre from "../components/WhoWeAre"
import WorkFlow from "../components/WorkFlow"
const IndexPage: React.FC<PageProps> = () => {

  return (
    <main>
      <Background />
      <Header />
      <MainSection />
      <VideoSection />
      <WhoWeAre />
      <WorkFlow />
    </main>
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
