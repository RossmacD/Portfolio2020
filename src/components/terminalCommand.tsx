import { css, SerializedStyles } from '@emotion/core'
import React from 'react'

interface Props {
  command?: string
  commandCss?: string | SerializedStyles
  active?: boolean
  location?: string
}

export const TerminalCommand: React.FC<Props> = ({ command, commandCss, active, location = `~` }) => {
  return (
    <code css={commandCss}>
      <span
        css={css`
          color: #5cf64a;
          margin-left: 0.25rem;
        `}
      >
        user@rossmacd
      </span>
      :
      <span
        css={css`
          color: #119da4;
        `}
      >
        {location}
      </span>
      $ {command}
      {active ? (
        <span
          css={css`
            animation: blink-animation 1s steps(5, start) infinite;
            @keyframes blink-animation {
              to {
                visibility: hidden;
              }
            }
          `}
        >
          |
        </span>
      ) : (
          ''
        )}
    </code>
  )
}
