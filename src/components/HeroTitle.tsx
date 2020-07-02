import * as React from 'react'
import { StyledHero, FixedDiv, DesktopHide, DesktopShow } from '../styles/simpleComponents'
import Hero from './Hero'
import Display1 from './Display1'
import Display2 from './Display2'
import ScrollDown from './scrolldown'
import ScrollIndicator from './ScrollIndicator'

const HeroTitle: React.FC = () => {
  // componentDidMount() {
  //   window.addEventListener('scroll', this.listenToScroll)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.listenToScroll)
  // }

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
          <Display2>Full-Stack developer</Display2>
        </div>
      </Hero>
      <ScrollIndicator />
    </FixedDiv>
  )
}

export default HeroTitle
