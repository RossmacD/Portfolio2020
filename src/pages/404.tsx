import * as React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'
import Display1 from '../components/Display1'
import Display2 from '../components/Display2'

const FixedDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`
const DocflowFix = styled.div`
  width: 100vw;
  height: 100vh;
`
const StyledHeading = styled.h1`
  text-align: center;
`

// const Row = styled.div`
//   display: flex;
// `
// const Col = styled.div`
//   flex: 0.5;
// `
const NotFoundPage = () => (
  <IndexLayout>
    <DocflowFix>
      <FixedDiv>
        <Hero>
          <div>
            <Display2>
              <span role="img" aria-label="Milkyway">
                🤯
              </span>
              Error
              <span role="img" aria-label="Milkyway">
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
    <Page>
      <Container>{/* <HomeButton /> */}</Container>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
