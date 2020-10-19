import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { colors } from '../styles/variables'

const StyledButton = css`
  display: inline-block;
  text-transform: uppercase;
  /* color: #8400ff; */
  color: ${colors.black};
  text-decoration: none;
  border: 2px solid;
  background: transparent;
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 700;
  align-self: flex-end;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  :hover {
    // color: #000;
    background: ${colors.brand};
    /* color: ${colors.red}; */
    color: ${colors.red};
    box-shadow: 0px 0px 0px 4px ${colors.brand};
  }
  margin: 0.4rem;
`

interface HomeButtonProps {
  to: string
}

const AltHomeButton: React.FC<HomeButtonProps> = ({ children, to }) => (
  <Link to={to} css={StyledButton}>
    {children}
  </Link>
)

export default AltHomeButton
