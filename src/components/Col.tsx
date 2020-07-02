import * as React from 'react'
import styled from '@emotion/styled'

interface ColProps {
  cssClass?: string
  span: number
}
const StyledCol = styled.div<ColProps>`
  grid-column: span ${(props: ColProps) => props.span};
  ${(props: ColProps) => props.cssClass || ''}
`

const Col: React.FC<ColProps> = ({ children, cssClass, span }) => {
  return (
    <StyledCol cssClass={cssClass} span={span}>
      {children}
    </StyledCol>
  )
}

export default Col
