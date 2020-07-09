import * as React from 'react'
import styled from '@emotion/styled'
import { getEmSize } from '../styles/mixins'
import { breakpoints, colors } from '../styles/variables'

const StyledDisplay2 = styled.h2`
  margin-top: -1vw;
  color: ${colors.red};
  margin-bottom: 0px;
  text-transform: uppercase;
  font-size: 5vw;
  text-align: center;
  font-weight: 700;

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    margin-left: -1vw;
    font-size: 14vw;
    margin-top: 2vh;
  }

  ${(props: Display2Props) => {
    return props.hide
      ? `
      opacity:100%;
      animation: fadeout 0.5s ease-out forwards!important;
      @keyframes fadeout {
        0% {
          opacity: 100%;
        }
        99% {
          display: block;
          opacity: 0;
          transform:translateY(-5vh)
        }
        100% {
          opacity: 0;
          display: none;
        }
      }
    `
      : `
      opacity:0%;
      animation: fadein3 0.5s ease-out 0.3s forwards!important;
          @keyframes fadein3 {
            0% {
              opacity: 0;
              display: none;
            }
            1% {
              display: block;
              opacity: 0;
              transform:translateY(-5vh)
            }
            100% {
              opacity: 100%;

            }
          }
    `
  }}
`

interface Display2Props {
  hide: boolean
}

const Display2: React.FC<Display2Props> = ({ children, hide }) => {
  React.useEffect(() => {
    // console.log(hide)
  }, [hide])
  return <StyledDisplay2 hide={hide}>{children}</StyledDisplay2>
}

export default Display2
