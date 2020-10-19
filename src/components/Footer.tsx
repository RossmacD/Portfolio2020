import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { colors, dimensions } from '../styles/variables'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  /* background: ${colors.brand}32; */
  background: ${colors.black};
  /* color: ${colors.gray.copy}; */
  // background: transparent;
  padding: 0.5rem 1rem;
  align-items: center;
  padding-bottom: 6rem;
  padding-top: 4rem;
  // opacity: 0.5;
`
const NavLink = css`
  background: ${colors.black};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: 0.1rem solid ${colors.red};
`

const Footer = () => (
  <StyledFooter>
    <p>Rossmacd © 2020</p>
    <span>
      <Link to="/contact">Contact Me</Link> | <Link to="/projects">Projects</Link>
    </span>
  </StyledFooter>
)

export default Footer
