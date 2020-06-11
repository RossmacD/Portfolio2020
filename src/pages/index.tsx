import * as React from 'react'
// import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
// import Showcase from '../components/showcase'
import HomeButton from '../components/HomeButton'
import { DocflowFix, Row, ScrollSnapper } from '../styles/simpleComponents'
import Col from '../components/Col'
import HeroTitle from '../components/HeroTitle'

const IndexPage = () => (
  <IndexLayout>
    <DocflowFix>
      <HeroTitle />
    </DocflowFix>
    <Page>
      <Container>
        <Row>
          <Col span={3}>
            <h1>Hi, I'm Ross MacDonald</h1>
            <p>I develop websites, software and apps </p>
            <p>Im an Irish full-stack developer with experience </p>
            {/* <code>Here is some test code</code> */}
            {/* <Link to="/page-2/">Here are some projects I have worked on</Link> */}
            <p>
              Here are some projects I have worked on{' '}
              <span role="img" aria-label="laptop">
                💻
              </span>
            </p>
            <HomeButton to="https://github.com/RossmacD" newWindow>
              See More
            </HomeButton>

            {/* <HomeButton to="https://github.com/RossmacD" newWindow>
                Github
              </HomeButton>
              <HomeButton to="/collisions" newWindow={false}>
                Collisions
              </HomeButton>
              <HomeButton to="https://laravel.rossmacd.com" newWindow={false}>
                InvoiceAmigo
              </HomeButton>
              <HomeButton to="https://github.com/drinking-game-app" newWindow>
                Shcoop
              </HomeButton> */}
          </Col>
          <Col span={3}>
            {/* <Showcase /> */}

            {/* <HomeButton to="https://github.com/RossmacD" newWindow>
                Github
              </HomeButton>
              <HomeButton to="/collisions" newWindow={false}>
                Collisions
              </HomeButton>
              <HomeButton to="https://laravel.rossmacd.com" newWindow={false}>
                InvoiceAmigo
              </HomeButton> */}
          </Col>
        </Row>
        <Row>
          <Col span={3}>{/* temp */}</Col>
          <Col span={3}>
            <h1>You do the Full-stack?</h1>
            <p>Yep, I have experience with front-end, backend and the networking side of things</p>
            <p>
              I have experience in many languages like Typescript, Javascript, Node, Java, PHP and Rust. I know technologies like React.js,
              React Native, Vue.js, Socket.IO, Pusher, MongoDb and MySQL / Postgres. In fact I made this site using React.js and Gatsby!
            </p>
          </Col>
        </Row>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
