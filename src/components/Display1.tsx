import * as React from 'react'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledDisplay1 = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  text-transform: uppercase;
  text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
  letter-spacing: -2.3vw;
  font-size: 15vw;
  margin-left: -2vw;
  text-align: center;
  color: ${colors.black};
  line-height: 1.1ch;
  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    margin-left: -2vw;
    font-size: 16.5vw;
  }
`
const StyledSpecial1 = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  text-transform: uppercase;
  text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
  letter-spacing: -5.75vw;
  text-align: center;
  color: ${colors.black};
  line-height: 1.1ch;
  margin-left: -5.5vw;
  font-size: 41.25vw;
`
interface Display1Props {
  special?: boolean
}

const Display1: React.FC<Display1Props> = ({ children, special }) => {
  if (!special) {
    return <StyledDisplay1>{children}</StyledDisplay1>
  }
  return <StyledSpecial1>{children}</StyledSpecial1>
}

export default Display1
