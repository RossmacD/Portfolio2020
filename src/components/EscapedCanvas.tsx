import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import useWindowDimensions from '../utils/WindowDimensions'

// const StyledCanvas = styled.canvas`
//   // width: '100px';
//   // height: '100px';
//   position: absolute;
//   z-index: -1;
// `
const EscapedCanvas = () => {
  const canvasRef = useRef(null)
  const { height, width } = useWindowDimensions()

  useEffect(() => {})

  return <div ref={canvasRef} />
}

export default EscapedCanvas
