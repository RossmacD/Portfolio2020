import * as React from 'react'
import { FixedDiv } from '../styles/simpleComponents'
import Hero from './Hero'
import ScrollDown from './scrolldown'

const HeroAnimated: React.FC = () => {
  return (
    <FixedDiv>
      <Hero />
      <ScrollDown />
    </FixedDiv>
  )
}

export default HeroAnimated
