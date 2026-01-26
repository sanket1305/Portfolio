declare module 'typewriter-effect' {
  import React from 'react'

  interface TypewriterOptions {
    strings?: string[]
    autoStart?: boolean
    loop?: boolean
    delay?: number
    deleteSpeed?: number
    cursor?: string
    onInit?: (typewriter: any) => void
    onComplete?: (typewriter: any) => void
  }

  interface TypewriterProps {
    options?: TypewriterOptions
    [key: string]: any
  }

  const Typewriter: React.FC<TypewriterProps>
  export default Typewriter
}
