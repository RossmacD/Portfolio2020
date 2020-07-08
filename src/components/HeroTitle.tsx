import * as React from 'react'
import { FixedDiv, DesktopHide, DesktopShow } from '../styles/simpleComponents'
import Hero from './Hero'
import Display1 from './Display1'
import ScrollIndicator from './ScrollIndicator'
import RCanvas from './RCanvas'
import Display2 from './Display2'
import HeroTextBounds from './HeroTextBounds'

interface HeroTitleProps {
  hide: boolean
  trigger: (state: boolean) => void
}

const HeroTitle: React.FC<HeroTitleProps> = ({ hide, trigger }) => {
  const [dimensions, setDimensions] = React.useState({ x: 0, y: 0, height: 0, width: 0, top: 0 })

  const getBoundDimensions = (newDimensions: any) => {
    setDimensions(old => newDimensions)
    // console.log(newDimensions)
  }

  return (
    <FixedDiv>
      <Hero>
        <RCanvas dimensions={dimensions} />
        <HeroTextBounds getBoundDimensions={getBoundDimensions}>
          <DesktopHide>
            <Display1 special hide={hide}>
              Ross
            </Display1>
          </DesktopHide>
          <Display1 hide={hide}>
            <DesktopShow>Ross</DesktopShow>
            MacD
          </Display1>
          <Display2 hide={hide}>Full-Stack developer</Display2>
        </HeroTextBounds>
      </Hero>
      <ScrollIndicator trigger={trigger} />
    </FixedDiv>
  )
}

export default HeroTitle
