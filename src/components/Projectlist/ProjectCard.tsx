import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { AiFillGithub } from "react-icons/ai"
import { MdHttp } from "react-icons/md"
import Chip from '@mui/material/Chip'
import { FaRegNewspaper } from "react-icons/fa"

interface ProjectCardProps {
  imgPath: string
  isBlog: boolean
  paper?: boolean
  title: string
  description: string
  demoLink?: string
  ghLink?: string
  paperLink?: string
  tags: string[]
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontFamily: "avenir next" }}>{props.title}</Card.Title>
        <Card.Text style={{ fontFamily: "avenir next" }}>
          {props.description}
        </Card.Text>
        {props.tags.map((tag, index) => (
          <Chip key={index} label={tag} />
        ))}

        {props.isBlog && !props.paper && (
          <div className="button-container">
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="demobtn"
            >
              {"Demo"}
              <MdHttp></MdHttp>
            </Button>
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="demobtn"
            >
              {"GitHub"}
              <AiFillGithub></AiFillGithub>
            </Button>
          </div>
        )}
        {props.isBlog && props.paper && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="viewbtn"
          >
            {"Demo"}
            <MdHttp></MdHttp>
          </Button>
        )}

        {!props.isBlog && !props.paper && (
          <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
            {"GitHub"}
            <AiFillGithub></AiFillGithub>
          </Button>
        )}
        {!props.isBlog && props.paper && (
          <Button className="viewbtn" variant="primary" href={props.paperLink} target="_blank">
            {"Publication"}
            <FaRegNewspaper></FaRegNewspaper>
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
