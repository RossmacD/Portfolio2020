import * as React from 'react'
import { FixedDiv, DesktopHide, DesktopShow } from '../styles/simpleComponents'
import Hero from './Hero'
import Display1 from './Display1'
import Display2 from './Display2'
import ScrollIndicator from './ScrollIndicator'

interface HeroTitleProps {
  hide: boolean
  trigger: (state: boolean) => void
}

const HeroTitle: React.FC<HeroTitleProps> = ({ hide, trigger }) => {
  return (
    <FixedDiv>
      <Hero>
        <div>
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
        </div>
      </Hero>
      <ScrollIndicator trigger={trigger} />
    </FixedDiv>
  )
}

export default HeroTitle
