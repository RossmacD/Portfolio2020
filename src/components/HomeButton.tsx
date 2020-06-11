import * as React from 'react'
import styled from '@emotion/styled'
// import { Link } from 'gatsby'

const StyledButton = styled.a`
  display: inline-block;
  text-transform: uppercase;
  color: #ff005a;
  text-decoration: none;
  border: 2px solid;
  background: transparent;
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  :hover {
    color: #8400ff;
  }
`

interface HomeButtonProps {
  className?: string
  to: string
  newWindow: boolean
}

const HomeButton: React.FC<HomeButtonProps> = ({ children, to, newWindow }) => (
  <StyledButton href={to} target={newWindow ? 'href' : ''}>
    {' '}
    {children}{' '}
  </StyledButton>
)

export default HomeButton
