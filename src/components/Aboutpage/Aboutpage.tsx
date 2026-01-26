import React from 'react'
import '../../pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import Lottie from 'react-lottie'
import AboutPage from '../../Assets/AboutPageDeveloper.json'

interface LottieOptions {
  loop: boolean
  autoplay: boolean
  animationData: any
  rendererSettings: {
    preserveAspectRatio: string
  }
}

const defaultOptions: LottieOptions = {
  loop: true,
  autoplay: true,
  animationData: AboutPage,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function Aboutpage(): JSX.Element {
  return (
    <div className='aboutpagebackground'>
      <Container>
        <Row className='textbackground'>
          <Col md={5}>
            <div className="webimage">
              <Lottie
                options={defaultOptions}
              />
            </div>
          </Col>
          <Col md={7}>
            <h3 className='aboutmetext' style={{ fontFamily: "aveneir next" }}>About Me</h3>
            <p className='aboutdetails' style={{ fontFamily: "aveneir next" }}>I am an enthusiastic Web Developer currently pursuing a Master's degree in Computer Science at the University of Florida. My expertise spans various programming languages and technologies, including Python, Java, NodeJS, Angular, React, Kubernetes, Docker, and Django.  During my time as a graduate student assistant for the Malt Group at UF, I played a key role in designing and developing a real-time traffic monitoring system using a wide range of technologies. Prior to this, I worked as an Associate Node.js Developer at Celebal Technologies, where I led the development of a Microsoft Teams Bot application using Node.js, Microsoft Bot Framework Composer, and Azure Cloud.  I also gained valuable experience during my internship at Fintroops Fintech Solutions Pvt. Ltd. as a full-stack web developer. In this role, I successfully coordinated the development of full-stack web applications for a car trading platform, enhancing user engagement and overall experience.  Beyond my professional experience, I have actively engaged in various projects that leveraged my skills in deep learning, natural language processing, and data science. Notably, my research paper on Grain disease identification and classification using Machine Learning Algorithms was published in The Journal of Cardio Vascular Disease and Research in July 2021.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Aboutpage
