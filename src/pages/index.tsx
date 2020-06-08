import * as React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Display1 from '../components/Display1'
import Display2 from '../components/Display2'
import Hero from '../components/Hero'
import ScrollDown from '../components/scrolldown'
import Showcase from '../components/showcase'
import HomeButton from '../components/HomeButton'

const FixedDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`
const DocflowFix = styled.div`
  width: 100vw;
  height: 100vh;
`

const Row = styled.div`
  display: flex;
`
const Col = styled.div`
  flex: 0.5;
`
const IndexPage = () => (
  <IndexLayout>
    <DocflowFix>
      <FixedDiv>
        <Hero>
          <div>
            <Display1>RossMacD</Display1>
            <Display2>
              <span role="img" aria-label="Milkyway">
                🌌
              </span>
              Full-Stack developer
            </Display2>
            {/* https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/milky-way_1f30c.png 2x */}
          </div>
        </Hero>
        <ScrollDown />
      </FixedDiv>
    </DocflowFix>
    <Page>
      <Container>
        <Row>
          <Col>
            <h1>Hi, I'm Ross MacDonald</h1>
            <p>I develop websites, software and apps </p>
            <p>
              I have experience in many languages like Typescript, Javascript, Node, Java, PHP and Rust. I know technologies like React.js,
              React Native, Vue.js, Socket.IO, Pusher, MongoDb and MySQL / Postgres. In fact I made this site using React.js and Gatsby!
            </p>
            {/* <code>Here is some test code</code> */}
            {/* <Link to="/page-2/">Here are some projects I have worked on</Link> */}
            <p>
              Here are some projects I have worked on{' '}
              <span role="img" aria-label="laptop">
                💻
              </span>
            </p>
          </Col>
          <Col>
            {/* <Showcase /> */}

            <HomeButton to="https://github.com/RossmacD" newWindow>
              Github
            </HomeButton>
            <HomeButton to="/collisions" newWindow={false}>
              Collisions
            </HomeButton>
            <HomeButton to="https://laravel.rossmacd.com" newWindow={false}>
              InvoiceAmigo
            </HomeButton>
          </Col>
        </Row>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
