import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const StyledButton = css`
  display: inline-block;
  text-transform: uppercase;
  color: #8400ff;
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
  to: string
}

const AltHomeButton: React.FC<HomeButtonProps> = ({ children, to }) => (
  <Link to={to} css={StyledButton}>
    {children}
  </Link>
)

export default AltHomeButton
