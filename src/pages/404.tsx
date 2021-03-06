import * as React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'
import Display1 from '../components/Display1'
import Display2 from '../components/Display2'
import { DocflowFix, FixedDiv } from '../styles/simpleComponents'

const StyledHeading = styled.h1`
  text-align: center;
`

const NotFoundPage = () => (
  <IndexLayout>
    <DocflowFix>
      <FixedDiv>
        <Hero>
          <div>
            <Display2>
              <span role="img" aria-label="Exploding head">
                🤯
              </span>
              Error
              <span role="img" aria-label="Exploding head">
                🤯
              </span>
            </Display2>
            <Display1>404</Display1>
            <StyledHeading>Page not found</StyledHeading>
            <StyledHeading>
              <h3>
                <Link to="/">Want to go home? Click here</Link>
              </h3>
            </StyledHeading>
          </div>
        </Hero>
      </FixedDiv>
    </DocflowFix>
  </IndexLayout>
)

export default NotFoundPage
