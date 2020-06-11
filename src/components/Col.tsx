import * as React from 'react'
import styled from '@emotion/styled'

interface ColProps {
  className?: string
  span: number
}

const Col: React.FC<ColProps> = ({ children, className, span }) => {
  const StyledCol = styled.div`
    grid-column: span ${span};
  `
  return <StyledCol className={className}>{children}</StyledCol>
}

export default Col
