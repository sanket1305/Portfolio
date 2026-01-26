import React from 'react'
import '../../pages/style.css'
import Typewriter from "typewriter-effect"

function Text(): JSX.Element {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Developer",
          "Node.js Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text
