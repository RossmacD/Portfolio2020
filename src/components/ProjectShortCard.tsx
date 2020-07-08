import React from 'react'
import { css } from '@emotion/core'
import { colors } from '../styles/variables'

const ProjectShortCard = () => {
  return (
    <div
      css={css`
      // display: inline-block;
                    background: white;
                    border-radius: 3rem;
                    height: 12rem;
                    padding: 1.5rem;
                    width: 24.4rem;
                    margin:1rem 1.5rem;
                    cursor:pointer;
                    // border:solid ${colors.red} 0.4rem;
                    flex: 0 0 auto!important;
                    :hover {
                      animation: bigHover 0.3s ease-out  forwards!important;
                      @keyframes bigHover {
                        0% {
                          transform: translate(0, 0);
                          // border:solid ${colors.red} 0.4rem;
                        }
                        100% {
                          transform: translate(-0.4rem, -0.4rem);
                          // border:solid black 0.4rem;
                          box-shadow: 0px 0px 0px 5px rgba(0,0,0,1);
                        }
                      }
                  `}
    >
      <h6
        css={css`
          color: black;
        `}
      >
        Invoice Amigo
      </h6>
      <p
        css={css`
          color: black;
        `}
      >
        An invoicing web app built with Laravel and php. Used stripe api for real payment and transfers
      </p>
    </div>
  )
}

export default ProjectShortCard
