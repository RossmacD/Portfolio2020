import * as React from 'react'
import styled from '@emotion/styled'
import { getEmSize } from '../styles/mixins'
import { widths, dimensions } from '../styles/variables'

interface ContainerProps {
  cssClass?: string
}

const Grid = styled.div`
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  max-width: ${getEmSize(widths.lg)}em;
  padding: 0 ${dimensions.containerPadding}rem;
  width: auto;
  ${(props: ContainerProps) => props.cssClass || ''}
`

const Container: React.FC<ContainerProps> = ({ children, cssClass }) => <Grid cssClass={cssClass}>{children}</Grid>

export default Container
