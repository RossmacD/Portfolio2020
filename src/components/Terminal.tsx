import { css } from '@emotion/core'
import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { colors } from '../styles/variables'
import { TerminalCommand } from './terminalCommand'
import Typing from './Typing'

interface Props { }

export const Terminal: React.FC<Props> = () => {
  const terminalStyle = css`
    width: calc(100% - 3rem);
    height: calc(100% - 2rem);
    background-color: ${colors.gray.calm};
    margin: 1rem 1.5rem;
    border: 1px solid ${colors.white};
    display: flex;
    flex-direction: column;
    position: relative;
    background: black;
    z-index: 2;
  `

  const commandHist = [
    { text: 'cd skills', location: `~`, dly: 1000 },
    { text: 'ls -a', location: '~/skills', dly: 1000 },
    { text: 'cd ~; clear', location: 'software_skills', dly: 5000 }
  ]

  const [currentIndex, setCurrentIndex] = useState([0, 0])

  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (currentIndex[0] < commandHist.length) {
      setTimeout(
        () => {
          setTypedText(commandHist[currentIndex[0]].text.slice(0, typedText.length + 1))
          if (typedText.length === commandHist[currentIndex[0]].text.length - 1) {
            setTimeout(() => {
              setCurrentIndex(i => [i[0] + 1, i[1]])
              setTypedText('')
            }, 600)
          }
        },
        typedText.length === 0 || typedText === ' ' ? commandHist[currentIndex[0]].dly : 180
      )
    } else if (currentIndex[0] === commandHist.length) {
      setCurrentIndex(i => [0, i[1]])
      setTypedText(' ')
    }
  }, [typedText])

  const skills = ['Typescript', 'React', 'Java', 'Rust', 'PHP', 'HTML5', 'CSS', 'Node', 'Javascript', 'Android', 'And_More']

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

      {commandHist.slice(0, currentIndex[0]).map(cmd => (
        <TerminalCommand command={cmd.text} location={cmd.location} />
      ))}

      <div
        css={css`
          margin: 1rem 0;
          display: flex;
          flex-wrap: wrap;
          flex-grow: 1;
        `}
      >
        {currentIndex[0] === 2
          ? skills.map(skill => (
            <code
              css={css`
                  margin: 0.1rem 0.75rem;
                `}
            >
              {'>'}
              {skill}
            </code>
          ))
          : ''}

        <TerminalCommand
          active
          // typed={<Typing steps={['cd software_skills', 'ls -a']} loop={Infinity} />}
          command={typedText}
          location={currentIndex[0] === 0 ? '~' : '~/skills'}
          commandCss={css`
            align-self: flex-end;
            width: 100%;
          `}
        />
      </div>
    </div>
  )
}
