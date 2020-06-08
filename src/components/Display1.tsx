import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

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
`

// interface Display1Props {
//   text: string
// }

const Display1: React.FC = ({ children }) => <StyledDisplay1>{children}</StyledDisplay1>

export default Display1
