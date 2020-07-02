import * as React from 'react'
import styled from '@emotion/styled'
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
  animation: fade-in 6s ease-in 1s 1 forwards;

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
    opacity: 100%;
  }

  &:hover::before {
    border-color: ${colors.red};
    transform: scale(0.8);
    opacity: 100%;
  }

  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 80%;
    }
  }
`

const ScrollIndicator: React.FC = () => <Arrow href="#1" />

export default ScrollIndicator
