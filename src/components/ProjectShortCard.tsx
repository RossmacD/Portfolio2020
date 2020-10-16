import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { colors } from '../styles/variables'

interface ShortCardProps {
  title: string
  description: string
  to: string
}

const ProjectShortCard: React.FC<ShortCardProps> = ({ title, description, to }) => {
  return (
    <Link
      css={css`
      scroll-snap-align: center;
      grid-column: span 1;
      display: inline-block;
      background: white;
      border-radius: 3rem;
      height: 12rem;
      padding: 1.5rem;
      width: 24.4rem;
      cursor:pointer;
      :hover {
        text-decoration: none;
        animation: bigHover 0.3s ease-out  forwards!important;
        @keyframes bigHover {
          0% {
            transform: translate(0, 0);
            // border:solid ${colors.red} 0.4rem;
          }
          100% {
            transform: translate(0.2rem, 0.2rem);
            // border:solid black 0.4rem;
            // box-shadow: 0px 0px 0px 5px rgba(0,0,0,1);
          }
        }
      `}
      to={to}
    >
      <h5
        css={css`
          color: black;
          text-transform: capitalize;
        `}
      >
        {title || 'Untitled'}
      </h5>
      <p
        css={css`
          color: black;
        `}
      >
        {/* An invoicing web app built with Laravel and php. Used stripe api for real payment and transfers */}
        {description || ''}
      </p>
    </Link>
  )
}

export default ProjectShortCard
