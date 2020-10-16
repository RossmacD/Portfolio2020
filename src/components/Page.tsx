import * as React from 'react'
import styled from '@emotion/styled'

import { dimensions, colors } from '../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding-top: 0px;
  // padding-bottom: 4rem;
  background-color: ${colors.black};
  border-top: 1px solid ${colors.altWhite.trans};
  min-height: 100vh;
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <StyledPage id="1" className={className}>
    {children}
  </StyledPage>
)

export default Page
