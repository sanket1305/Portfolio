declare module 'react-vertical-timeline-component' {
  import React from 'react'

  interface VerticalTimelineProps {
    className?: string
    [key: string]: any
  }

  interface VerticalTimelineElementProps {
    className?: string
    contentStyle?: React.CSSProperties
    contentArrowStyle?: React.CSSProperties
    date?: React.ReactNode
    dateClassName?: string
    iconStyle?: React.CSSProperties
    icon?: React.ReactNode
    onTimelineElementClick?: () => void
    position?: string
    [key: string]: any
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>
}

declare module 'react-vertical-timeline-component/style.min.css' {}
