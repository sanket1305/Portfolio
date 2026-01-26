import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdOutlineWork } from "react-icons/md"
import { Container, Row } from 'react-bootstrap'

const Experience = (): JSX.Element => (
  <>
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <h3 className='skillshead' style={{ fontFamily: "aveneir next", marginBottom: "20px" }}>Experience</h3>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <VerticalTimeline>
          <style>{`
            .vertical-timeline::before {
              background-color: black;
            }
          `}</style>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4158d0', color: '#fff' } as any}
            contentArrowStyle={{ borderRight: '7px solid  #4158d0' } as any}
            date={<span style={{ color: "black" }}>
              Jan 2025 - Present
            </span>}
            iconStyle={{ background: 'black', color: '#4158d0' } as any}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Software Engineer</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>Google</h5>
            <ul>
              <li style={{ fontFamily: "aveneir next" }}>Developed AI-driven recommendation systems to optimize creator content strategies, increasing creator revenue, watch time, and subscriber growth using machine learning models.</li>
              <li style={{ fontFamily: "aveneir next" }}>Built scalable ML inference pipelines leveraging Tflex for efficient training and real-time model deployment, ensuring high performance and availability of recommendations.</li>
              <li style={{ fontFamily: "aveneir next" }}>Wrote complex SQL queries to analyze YouTube's vast data infrastructure, extracting actionable insights for model improvement, A/B testing, and content strategy.</li>
              <li style={{ fontFamily: "aveneir next" }}>Worked cross-functionally with product and research teams to integrate model outputs into YouTube's core creator tools, improving user engagement and content discoverability.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4158d0', color: '#fff' } as any}
            contentArrowStyle={{ borderRight: '7px solid  #4158d0' } as any}
            date={<span style={{ color: "black" }}>
              Oct 2024 - Jan 2025
            </span>}
            iconStyle={{ background: 'black', color: '#4158d0' } as any}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Software Engineer III</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>Walmart</h5>
            <ul>
              <li style={{ fontFamily: "aveneir next" }}>Developing a dashboard for Walmart and Sam's Club stores to monitor the status of TVs used for displaying advertisements. The dashboard tracks the number of TVs playing ads  and provides functionality to remotely reboot TVs and control ad playback.</li>
              <li style={{ fontFamily: "aveneir next" }}>Utilizing React and Typescript for front-end development, implementing server-side rendering and caching to optimize the display of store and device data on the dashboard.</li>
              <li style={{ fontFamily: "aveneir next" }}>Utilizing Java Spring Boot for writing APIs and managing data with SQL databases, while deploying services on WCNP Cloud to ensure scalability and reliability.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4158d0', color: '#fff' } as any}
            contentArrowStyle={{ borderRight: '7px solid  #4158d0' } as any}
            date={<span style={{ color: "black" }}>
              Jul 2024 - Oct 2024
            </span>}
            iconStyle={{ background: 'black', color: '#4158d0' } as any}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Full Stack Developer</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>Dominion National Insurance</h5>
            <ul>
              <li style={{ fontFamily: "aveneir next" }}>Migrating the Data Dental internal application from .NET MVC architecture to .NET Core, enabling seamless integration with React, which improved the overall performance and scalability of the application. </li>
              <li style={{ fontFamily: "aveneir next" }}>Resolved critical bugs in both the Provider and Member portals of the insurance platform using .NET Core, enhancing user experience and system reliability.</li>
              <li style={{ fontFamily: "aveneir next" }}>Utilized Azure DevOps for continuous integration and deployment, streamlining the development process and reducing time-to-market.</li>
              <li style={{ fontFamily: "aveneir next" }}>Optimized database interactions using MS SQL and Redis Cache, leading to faster data retrieval and improved application performance.</li>
              <li style={{ fontFamily: "aveneir next" }}>Followed Agile methodology to manage tasks and sprints, collaborating effectively with cross-functional teams to deliver high-quality features and improvements.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4158d0', color: '#fff' } as any}
            contentArrowStyle={{ borderRight: '7px solid  #4158d0' } as any}
            date={<span style={{ color: "black" }}>
              Jun 2023 - Jun 2024
            </span>}
            iconStyle={{ background: 'black', color: '#4158d0' } as any}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Graduate Research Assistant</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>University of Florida</h5>
            <ul>
              <li style={{ fontFamily: "aveneir next" }}>Developed and deployed a high-availability administrative dashboard using Java, Spring Boot and Hibernate, ensuring robust backend solutions that support business needs and improve operational efficiency.</li>
              <li style={{ fontFamily: "aveneir next" }}>Enhanced front-end user interface with React.js, aligning with contemporary JavaScript frameworks and improving client-side experiences to create end-user-centric solutions.</li>
              <li style={{ fontFamily: "aveneir next" }}>Implemented Continuous Integration and Continuous Deployment (CI/CD) pipelines using Jenkins; optimized Docker containerization strategies, achieving a 90% reduction in deployment-related downtimes.</li>
              <li style={{ fontFamily: "aveneir next" }}>Leveraged the extensive functionalities of the D3.js framework to create comprehensive data visualizations based on shark attacks and geolocations, enhancing data insights and decision-making.</li>
              <li style={{ fontFamily: "aveneir next" }}>Engaged in DevOps practices, agile development, and scrum ceremonies, fostering a collaborative and efficient development environment.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4158d0', color: '#fff' } as any}
            contentArrowStyle={{ borderRight: '7px solid  #4158d0' } as any}
            date={<span style={{ color: "black" }}>
              Jan 2023 - May 2023
            </span>}
            iconStyle={{ background: 'black', color: '#4158d0' } as any}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Graduate Student Assistant</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>University of Florida (Malt Group)</h5>
            <ul>
              <li style={{ fontFamily: "aveneir next" }}>Engineered a sophisticated web dashboard backend using Java and Spring MVC, integrating seamlessly with Kafka for real-time data streams and AWS S3 for scalable data storage.</li>
              <li style={{ fontFamily: "aveneir next" }}>Crafted a responsive admin interface using HTML5, CSS3, React, and Material-UI, enhancing administrative functionalities and user interactions.</li>
              <li style={{ fontFamily: "aveneir next" }}>Developed a real-time traffic monitoring system with Java, demonstrating the capability to handle complex data management tasks over distributed networks.</li>
              <li style={{ fontFamily: "aveneir next" }}>Utilized Docker and Kubernetes to maintain system efficiency and reliability across various operational scenarios.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4158d0', color: '#fff' } as any}
            contentArrowStyle={{ borderRight: '7px solid  #4158d0' } as any}
            date={<span style={{ color: "black" }}>
              Jan 2022 - Dec 2022
            </span>}
            iconStyle={{ background: 'black', color: '#4158d0' } as any}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Backend Developer</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>UPSC Pre</h5>
            <ul>
              <li style={{ fontFamily: "aveneir next" }}>Created an android learning platform application for students to prepare for the most competitive exams conducted by UPSC (Union Public Service Commission) of India while closely collaborating with 3 others.</li>
              <li style={{ fontFamily: "aveneir next" }}>Achieved top ten ranking among UPSC-related applications on the Play Store. Currently, overseeing the expansion of the existing android app by introducing a web application component.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4158d0', color: '#fff' } as any}
            contentArrowStyle={{ borderRight: '7px solid  #4158d0' } as any}
            date={<span style={{ color: "black" }}>
              Aug 2021 - Oct 2021
            </span>}
            iconStyle={{ background: 'black', color: '#4158d0' } as any}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "black", fontFamily: "aveneir next" }}>Associate Nodejs Developer</h3>
            <h5 className="vertical-timeline-element-subtitle" style={{ color: "black", fontFamily: "aveneir next" }}>Celebal Technologies</h5>
            <ul>
              <li style={{ fontFamily: "aveneir next" }}>Developed and maintained a Microsoft Teams Bot application using Node.js and the Microsoft Bot Framework, streamlining HR processes and reducing manual workload by 30%, while ensuring smooth functionality and optimal performance.</li>
              <li style={{ fontFamily: "aveneir next" }}>Collaborated with cross-functional teams, including designers and product managers, to gather requirements and implement new features and enhancements in the chatbot.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Row>
    </Container>
  </>
)

export default Experience
