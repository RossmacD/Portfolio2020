import * as React from 'react'
import styled from '@emotion/styled'

import { Grid } from '../styles/simpleComponents'

// const StyledContainer = styled.div`
//   position: relative;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 150px;
//   width: auto;
//   max-width: ${getEmSize(widths.lg)}em;
// `

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <Grid className={className}>{children}</Grid>

export default Container
