import React from 'react'
import '../../pages/style.css'
import ProjectCard from "./ProjectCard"
import { Container, Row, Col } from 'react-bootstrap'

// Note: You'll need to add image files to your Assets folder
// For now, using placeholder strings - replace with actual image imports

function Projectlist(): JSX.Element {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <h3 className='skillshead' style={{ fontFamily: "aveneir next" }}>Projects</h3>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath=""
                isBlog={true}
                paper={true}
                title="UPSC Pre"
                description="Built an android learning platform application for students to prepare for the most competitive exams conducted by
                UPSC (Union Public Service Commission) of India while closely collaborating with 3 others. Ranked among top ten UPSC-related applications, the app is available on Playstore with a productivity boost of 20%
                and user engagement boost of 40% in the past year."
                demoLink="https://play.google.com/store/apps/details?id=com.upscpre.iasprep&hl=en&gl=US"
                tags={["Next.js", "Node.js", "MongoDB", "Express", "AWS", "Elasticsearch", "Django", "Python"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath=""
                isBlog={false}
                paper={false}
                title="PeekNshop"
                description="Brought together hundreds of nearby local stores that do not have proper online shopping facilities and displayed the
                local offers available by accessing the user location with an SDLC implementation using agile methodology. Designed a web application with three other teammates using Angular for the front end and GO language for the back
                end."
                ghLink="https://github.com/vamsi3379/peekNshop"
                tags={["Angular", "Bootstrap", "GO", "SQL", "Cypress", "Figma"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath=""
                isBlog={true}
                paper={false}
                title="EShop"
                description="Developed a simple e-commerce web application that displays a wide range of products. The admin has been empowered with the ability to add diverse categories and products to the platform. For user login and registration, I implemented JWT authentication."
                ghLink="https://github.com/vamsi3379/EShop"
                demoLink="https://eshopclient.azurewebsites.net/"
                tags={[".Net", "Blazor", "C#", "Azure", "MSSQL", "Stripe", "Bootstrap", "Swagger"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath=""
                isBlog={true}
                paper={false}
                title="Book Wise"
                description="I designed and developed a Library Management System (LMS) that allows users to reserve books for a specified period by making a payment. Additionally, users can seamlessly write reviews for the books they purchase. As an administrator, I incorporated the ability to add various types of books and respond to inquiries from different users."
                ghLink="https://github.com/vamsi3379/Book_Wise"
                demoLink="https://ec2-18-189-18-248.us-east-2.compute.amazonaws.com/home"
                tags={["SpringBoot", "React", "MySQL", "Java", "TypeScript", "Okta", "Docker", "Microservices", "Kafka", "Stripe"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath=""
                isBlog={false}
                paper={false}
                title="Hand-Written-Mathematical-Symbols-Classification"
                description="The project aims to build a machine-learning model that can recognize various mathematical symbols. We're using a large dataset created by the team, containing 10 symbol patterns. Each team member contributed around 100 symbols, resulting in a dataset of about 400 images. Each image is characterized by a Math Symbol, Label, and Integer Encoding."
                ghLink="https://github.com/vamsi3379/Hand-Written-Mathematical-Symbols-Classification"
                tags={["Python", "Tensorflow", "CNN", "SVM"]}
              />
            </Col>

            <Col xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath=""
                isBlog={false}
                paper={false}
                title="Bitcoin Mining"
                description="Bitcoins are a type of cryptocurrency that use cryptographic hashing to limit their supply. The key component of a bitcoin is an input that, when hashed using SHA-256, produces an output smaller than a target value with a certain number of leading zeros. The goal of the project is to use Erlang and the Actor Model to build a solution that efficiently solves this problem on multi-core machines."
                ghLink="https://github.com/vamsi3379/DOSP_Project1_Bitcoin_Mining"
                tags={["Erlang"]}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Projectlist
