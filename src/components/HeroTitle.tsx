import * as React from 'react'
import { StyledHero, FixedDiv, DesktopHide, DesktopShow } from '../styles/simpleComponents'
import Hero from './Hero'
import Display1 from './Display1'
import Display2 from './Display2'
import ScrollDown from './scrolldown'

const HeroTitle: React.FC = () => {
  return (
    <FixedDiv>
      <Hero>
        <div>
          <DesktopHide>
            <Display1 special>Ross</Display1>
          </DesktopHide>
          <Display1>
            <DesktopShow>Ross</DesktopShow>
            MacD<DesktopHide>onald</DesktopHide>
          </Display1>
          <Display2>
            {/* <DesktopShow>
              <span role="img" aria-label="Milkyway">
                🌌
              </span>
            </DesktopShow> */}
            Full-Stack developer
          </Display2>
          {/* https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/milky-way_1f30c.png 2x */}
        </div>
      </Hero>
      <ScrollDown />
    </FixedDiv>
  )
}

export default HeroTitle
