import { css } from '@emotion/core'
import React from 'react'
import { colors } from '../styles/variables'

interface Props { }

const terminalStyle = css`
  width: 100%;
  height: 100%;
  background-color: ${colors.gray.calm};
  /* margin: 1rem 0.5rem; */
  border: 1px solid ${colors.white};
  /* border-top: 5px; */
  /* padding: 1rem 0.5rem; */
`

export const Terminal: React.FC<Props> = ({ children }) => {
  return (
    <div css={terminalStyle}>
      <div
        css={css`
          padding: 0.25rem 0.1rem;
          background-color: ${colors.white};
          display: flex;
          flex-direction: row-reverse;
          font-size: 0.5rem;
          margin-bottom: 0.5rem;
        `}
      >
        <span>➖🔴</span>
      </div>
      {children}
      <code>user@rossmacd.com:~$ cd software_skills</code>
      <br />
      <code>user@rossmacd.com:~$ ls -a</code>
      <br />
      <div
        css={css`
          /* display: grid; */
          margin-top: 1rem;
          /* grid-template-columns: 1fr 1fr 1fr 1fr; */
          /* grid-gap: 0.1rem; */
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {['Typescript', 'React', 'Javascript', 'Java', 'Android'].map(skill => (
          <code
            css={css`
              margin: 0.1rem 0.75rem;
            `}
          >
            {'>'}
            {skill}
          </code>
        ))}
      </div>
    </div>
  )
}
