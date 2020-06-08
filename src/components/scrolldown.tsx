import * as React from 'react'
import styled from '@emotion/styled'

const ScrollButton = styled.a`
  display: block;
`

const Mouse = styled.span`
  margin: 0 auto;
  display: block;
  border-radius: 50px;
  border: 2px solid #fff;
  height: 80px;
  width: 40px;
  transform: translateY(-10%);
  opacity: 0.5;
`

const Move = styled.span`
  position: absolute;
  background-color: #fff;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  animation: move 5s linear infinite;
  @keyframes move {
    0% {
      transform: translate(-50%, 8px);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 32px);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 64px);
      opacity: 0;
    }
  }
`

const ScrollDown: React.FC = () => (
  <ScrollButton href="#1">
    <Mouse>
      <Move />
    </Mouse>
  </ScrollButton>
)

export default ScrollDown
