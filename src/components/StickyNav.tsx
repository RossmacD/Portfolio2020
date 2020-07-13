import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { colors, dimensions } from '../styles/variables'

const Navbar = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  display: flex;
  top: 0px;
  z-index: 99999;
  // background: ${colors.black};
  background: transparent;
  padding: 0.5rem 1rem;
  justify-content:flex-end;
  margin-bottom: ${dimensions.containerPadding}rem;
`
const NavLink = css`
  background: ${colors.black};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: 0.1rem solid ${colors.red};
`
const lastNavLink = css`
  margin-right: 5rem;
`
const StickyNav = () => (
  <Navbar>
    <Link
      to="/"
      css={[
        NavLink,
        css`
          display: inline-block;
          margin-right: auto;
        `
      ]}
    >
      {/* <h1
        css={css`
          display: inline-block;
          margin-left: auto;
        `}
      > */}
      Ross MacD
      {/* </h1> */}
    </Link>
    <Link to="/projects" css={NavLink}>
      Projects
    </Link>
    <Link to="/" css={[NavLink, lastNavLink]}>
      Contact
    </Link>
  </Navbar>
)

export default StickyNav
