import * as React from 'react'
import { FixedDiv, DesktopHide, DesktopShow } from '../styles/simpleComponents'
import Hero from './Hero'
import Display1 from './Display1'
import Display2 from './Display2'
import ScrollIndicator from './ScrollIndicator'

interface HeroTitleProps {
  hide: boolean
}

const HeroTitle: React.FC<HeroTitleProps> = ({ hide }) => {
  return (
    <FixedDiv>
      <Hero>
        <div>
          <DesktopHide>
            <Display1 special>Ross</Display1>
          </DesktopHide>
          <Display1>
            <DesktopShow>Ross</DesktopShow>
            MacD
          </Display1>
          <Display2 hide={hide}>Full-Stack developer</Display2>
        </div>
      </Hero>
      <ScrollIndicator />
    </FixedDiv>
  )
}

export default HeroTitle
