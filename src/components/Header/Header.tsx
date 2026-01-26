import React, { useState, useEffect, useRef, ReactNode } from 'react'
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../../pages/style.css'
import Homepage from '../Homepage/Homepage'
import Aboutpage from '../Aboutpage/Aboutpage'
import Projectlist from '../Projectlist/Projectlist'
import Contact from '../Contactpage/Contactpage'
import Experience from '../Aboutpage/Experience'
import Skills from '../Aboutpage/Skills'

type SectionType = "home" | "about" | "skills" | "experience" | "projects" | "contact"

function Header(): JSX.Element {
  const [expand, updateExpanded] = useState<boolean | "expanded">(false)
  const [navColour, updateNavbar] = useState(false)
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<any>(null)
  const [currentSection, setCurrentSection] = useState<SectionType>("home")

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home")
      const about = document.getElementById("about")
      const skills = document.getElementById("skills")
      const experience = document.getElementById("experience")
      const projects = document.getElementById("projects")
      const contact = document.getElementById("contact")
      
      if (contact && contact.getBoundingClientRect().top <= 20 + (navbarRef.current?.offsetHeight || 0)) {
        setCurrentSection("contact")
      } else if (projects && projects.getBoundingClientRect().top <= 20 + (navbarRef.current?.offsetHeight || 0)) {
        setCurrentSection("projects")
      } else if (experience && experience.getBoundingClientRect().top <= 20 + (navbarRef.current?.offsetHeight || 0)) {
        setCurrentSection("experience")
      } else if (skills && skills.getBoundingClientRect().top <= 20 + (navbarRef.current?.offsetHeight || 0)) {
        setCurrentSection("skills")
      } else if (about && about.getBoundingClientRect().top <= 20 + (navbarRef.current?.offsetHeight || 0)) {
        setCurrentSection("about")
      } else if (home && home.getBoundingClientRect().top <= 20 + (navbarRef.current?.offsetHeight || 0)) {
        setCurrentSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [currentSection])

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    const scrollTop = (ref.current?.offsetTop || 0) - 40
    window.scrollTo({ top: scrollTop, behavior: "smooth" })
    updateExpanded(false)
  }

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true)
      } else {
        updateNavbar(false)
      }
    }
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  return (
    <>
      <Navbar 
        ref={navbarRef} 
        expanded={expand as boolean}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : `navbar ${currentSection}`}
      >
        <Navbar.Brand className='logotext'>
          <div className='navbar-toggle'>
            <h5 style={{ color: "#4158d0" }}>Vamsi</h5>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle 
          className='navbar-toggler' 
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded")
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavClick(homeRef)}
                className={`rounded ${currentSection === "home" ? "selected-nav-item" : ""}`}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavClick(aboutRef)}
                className={`rounded ${currentSection === "about" ? "selected-nav-item" : ""}`}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavClick(skillsRef)}
                className={`rounded ${currentSection === "skills" ? "selected-nav-item" : ""}`}
              >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavClick(experienceRef)}
                className={`rounded ${currentSection === "experience" ? "selected-nav-item" : ""}`}
              >
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavClick(projectRef)}
                className={`rounded ${currentSection === "projects" ? "selected-nav-item" : ""}`}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavClick(contactRef)}
                className={`rounded ${currentSection === "contact" ? "selected-nav-item" : ""}`}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Button
              onClick={() => {
                window.open("https://drive.google.com/file/d/1vt2LtVad264O0QD41O48JO87WmCPh03r/view?usp=sharing")
              }}
              className='resumebtn'
            >
              <span>Resume</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="home" ref={homeRef}>
        <Homepage />
      </div>

      <div id="about" ref={aboutRef}>
        <Aboutpage />
      </div>

      <div id="skills" ref={skillsRef} style={{ paddingTop: "50px" }}>
        <Skills />
      </div>

      <div id="experience" ref={experienceRef} style={{ paddingTop: "50px" }}>
        <Experience />
      </div>

      <div id="projects" ref={projectRef} style={{ paddingTop: "50px" }}>
        <Projectlist />
      </div>

      <div id="contact" ref={contactRef} style={{ paddingTop: "50px" }}>
        <Contact />
      </div>
    </>
  )
}

export default Header
