import * as React from 'react'
import { useTrackVisibility } from 'react-intersection-observer-hook'
import { ShadowSpan } from '../styles/simpleComponents'

interface TriggerProps {
  trigger: (state: boolean) => void
}

const VisibilityTrigger: React.FC<TriggerProps> = ({ children, trigger }) => {
  const [ref, { isVisible }] = useTrackVisibility()

  React.useEffect(() => {
    // console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`)
    trigger(isVisible)
  }, [isVisible])

  return <ShadowSpan ref={ref}>{children}</ShadowSpan>
}

export default VisibilityTrigger
