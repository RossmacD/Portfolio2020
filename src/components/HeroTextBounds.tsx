import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { getDimensions } from '../utils/getDimensions'
// import { getDimensions } from '../utils/getDimensions'

const BoundingBox = styled.div`
  background: black;
  padding: 1em 2em;
`
interface BoundsProps {
  getBoundDimensions: (state: any) => void
}

const HeroTextBounds: React.FC<BoundsProps> = ({ children, getBoundDimensions }) => {
  const boundingRef = useRef<HTMLDivElement>(null)
  const [dimensions] = getDimensions(boundingRef)

  React.useEffect(() => {
    getBoundDimensions(dimensions)
  }, [dimensions])

  return <BoundingBox ref={boundingRef}>{children}</BoundingBox>
}

export default HeroTextBounds
