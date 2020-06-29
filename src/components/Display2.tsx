import * as React from 'react'
import styled from '@emotion/styled'
import { getEmSize } from '../styles/mixins'
import { breakpoints, colors } from '../styles/variables'

const StyledDisplay2 = styled.h2`
  margin-top: -2vw;
  color: ${colors.red};
  margin-bottom: 0px;
  text-transform: uppercase;
  text-shadow: 0px 2px 0px #8400ff;
  font-size: 5vw;
  text-align: center;
  font-weight: 700;
  animation: float 10s ease-in-out infinite;
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(2vw);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    margin-left: -1vw;
    font-size: 14vw;
    margin-top: 2vh;

    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(0vh);
      }
      100% {
        transform: translatey(0px);
      }
  }
`

// interface Display1Props {
//   text: string
// }

const Display2: React.FC = ({ children }) => <StyledDisplay2>{children}</StyledDisplay2>

export default Display2
