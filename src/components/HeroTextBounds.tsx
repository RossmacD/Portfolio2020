import styled from '@emotion/styled'
import React, { useRef } from 'react'
// import { getDimensions } from '../utils/getDimensions'

const BoundingBox = styled.div`
  background: black;
  padding: 1em 2em;
`
const HeroTextBounds: React.FC = ({ children }) => {
  // const boundingRef = useRef<HTMLDivElement>(null){/*ref={boundingRef*/}
  // const [dimensions] = getDimensions(boundingRef)

  return <BoundingBox>{children}</BoundingBox>
}

export default HeroTextBounds
