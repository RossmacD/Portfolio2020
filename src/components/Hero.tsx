import * as React from 'react'
import styled from '@emotion/styled'

const StyledHero = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

// interface Display1Props {
//   text: string
// }

const Hero: React.FC = ({ children }) => <StyledHero>{children}</StyledHero>

export default Hero
