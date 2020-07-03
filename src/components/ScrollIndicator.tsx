import * as React from 'react'
import styled from '@emotion/styled'
import { useTrackVisibility } from 'react-intersection-observer-hook'
import { colors } from '../styles/variables'

const Arrow = styled.a`
  width: 6vmin;
  height: 6vmin;
  box-sizing: border-box;
  position: absolute;
  bottom: 6vmin;
  left: 47vw;
  transform: rotate(135deg);
  opacity: 0%;

  cursor: pointer;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-width: 0.8vmin 0.8vmin 0 0;
    border-style: solid;
    border-color: #fafafa;
    transition: 0.2s ease;
    display: block;
    transform-origin: 100% 0;
  }

  &:after {
    content: '';
    float: left;
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;

    border-width: 0 0.8vmin 0 0;
    border-style: solid;
    border-color: #fafafa;
    transform-origin: 100% 0;
    transition: 0.2s ease;
  }

  &:hover::after {
    transform: rotate(45deg);
    border-color: ${colors.red};
    height: 120%;
    margin-top: 0.6vmin;
  }

  &:hover::before {
    border-color: ${colors.red};
    transform: scale(0.8);
  }
  &:hover {
    opacity: 100%;
    animation: none;
  }
  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 80%;
    }
  }

  ${(props: ArrowProps) => [props.hovered ? `animation:none;opacity:100%` : ` animation: fade-in 6s ease-in 1s 1 forwards;`]}
`

interface TriggerProps {
  trigger: (state: boolean) => void
}

interface ArrowProps {
  hovered: boolean
}

const ScrollIndicator: React.FC<TriggerProps> = ({ trigger }) => {
  const [hovered, setHovered] = React.useState(false)

  return (
    <Arrow
      hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onClick={() => {
        trigger(true)
        setTimeout(() => {
          window.location.href = '#1'
        }, 300)
      }}
    />
  )
}

export default ScrollIndicator
