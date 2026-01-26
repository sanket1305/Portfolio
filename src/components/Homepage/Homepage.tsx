import React from 'react'
import '../../pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai"
import {
  SiLeetcode,
} from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import Lottie from 'react-lottie'
import HomeImage from '../../Assets/RJPmpgB4oS.json'

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
  animationData: HomeImage,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function Home(): JSX.Element {
  return (
    <div className='homepagebackground d-flex align-items-center justify-content-center'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext' style={{ fontFamily: "aveneir next" }}>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext' style={{ fontFamily: "aveneir next" }}>I'm Vamsi Pachamatla</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/vamsi3379")
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/vamsipachamatla/")
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/vamsi_pachamatla?igshid=YmMyMTA2M2Y=")
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
            <button onClick={() => {
              window.open("https://leetcode.com/VamsiPachamatla/")
            }}
              className='socailmediabtn'><SiLeetcode className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
              <Lottie
                options={defaultOptions}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
