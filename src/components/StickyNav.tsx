import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { colors, dimensions } from '../styles/variables'
import linkdinSVG from '../assets/linkdinsvg.svg'
import githubSVG from '../assets/github.svg'

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
  :hover {
    animation: bigHover 0.3s ease-out forwards !important;
  }
`
const NavLinkSocial = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  :hover {
    animation: bigHover 0.3s ease-out forwards !important;
  }
`

const lastNavLink = css`
  margin-right: 5vw;
`
const StickyNav = ({ socialOnly = false }) => (
  <Navbar>
    {!socialOnly && (
      <>
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
        <Link to="/contact" css={[NavLink]}>
          Contact
        </Link>
      </>
    )}

    <a href="https://github.com/RossmacD" target="_blank" rel="noopener noreferrer" css={[NavLinkSocial]}>
      <img src={githubSVG} width="30" height="30" alt="Github" title="Github" />
    </a>
    <a href="https://www.linkedin.com/in/ross-macd/" target="_blank" rel="noopener noreferrer" css={[NavLinkSocial, lastNavLink]}>
      <img src={linkdinSVG} width="30" height="30" alt="Linkedin" title="Linkedin" />
    </a>
  </Navbar>
)

export default StickyNav
