import * as React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/core'
// import { css } from '@emotion/core'

interface ColProps {
  cssClass?: string | SerializedStyles
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
