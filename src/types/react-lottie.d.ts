declare module 'react-lottie' {
  import React from 'react'

  interface LottieOptions {
    loop?: boolean
    autoplay?: boolean
    animationData: any
    rendererSettings?: Record<string, any>
  }

  interface LottieProps {
    options: LottieOptions
    height?: number
    width?: number
    isStopped?: boolean
    isPaused?: boolean
    [key: string]: any
  }

  const Lottie: React.FC<LottieProps>
  export default Lottie
}
