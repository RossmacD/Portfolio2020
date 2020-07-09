import * as React from 'react'
// import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
// import Showcase from '../components/showcase'
import HomeButton from '../components/HomeButton'
import { DocflowFix, ShadowSpan } from '../styles/simpleComponents'
import Col from '../components/Col'
import HeroTitle from '../components/HeroTitle'
import VisibilityTrigger from '../components/VisibilityTrigger'
// import RCanvas from '../components/RCanvas'
import { genClass } from '../styles/genericClasses'
import { Row } from '../components/Row'
import AltHomeButton from '../components/AltHomeButton copy'
import { colors } from '../styles/variables'
import ProjectCarousel from '../components/ProjectCarousel'
// import { animOne } from '../animations/helpers'

const IndexPage = () => {
  const [hideHero, setHideHero] = React.useState(false)
  return (
    <IndexLayout>
      <DocflowFix>
        <HeroTitle hide={hideHero} trigger={setHideHero} />
      </DocflowFix>
      <Page>
        <Container>
          <Row>
            <Col span={3}>
              <h1>
                Hi, I'm <VisibilityTrigger trigger={setHideHero}>Ross MacDonald </VisibilityTrigger>
              </h1>
              <p>I develop websites, software and apps</p>
              <p>
                Im an Irish full-stack developer who has experience with many technologies. Creating apps as both a leader of development
                and in a supporting capacity.
              </p>
              <p>
                I have been working as a freelance developer and contractor for 4 years. Here are some projects I have worked on
                <span role="img" aria-label="laptop">
                  💻
                </span>
              </p>
              <HomeButton to="https://github.com/RossmacD" newWindow>
                See More
              </HomeButton>
            </Col>
            <Col span={3} cssClass={genClass.flexCenter}>
              {/* <RCanvas animation={animOne} /> */}
            </Col>
          </Row>
        </Container>
        <div
          css={css`
            margin-top: 4rem;
          `}
        >
          <div
            css={css`
              background-size: auto;
              // background-repeat: no-repeat;
              // will-change: transform;
              width: 100%;
              height: 32rem;
              // clip-path: polygon(0px 16%, 100% 4%, 100% 82%, 0px 94%);
              clip-path: polygon(0px 84%, 100% 96%, 100% 18%, 0px 6%);
              // transform: translate3d(0px, -50px, 0px);
              background-color: ${colors.red};
            `}
          />
          <div css={css(genClass.breakContainer)}>
            <Row cssClass={genClass.noMargin}>
              <Col span={6} cssClass={genClass.flexCol}>
                <div css={css(genClass.fauxContainter + genClass.flexCol)}>
                  <h1>📝 Projects </h1>
                </div>

                <ProjectCarousel />
                <div css={css(genClass.fauxContainter + genClass.flexCol)}>
                  <AltHomeButton to="contact">All</AltHomeButton>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Container>
          <Row>
            <Col span={3} cssClass={genClass.flexCenter}>
              {/* <RCanvas /> */}
            </Col>
            <Col span={3}>
              <h1>You do the Full-stack?</h1>
              <p>Yep, I have experience with front-end, backend and the networking side of things</p>
              <p>
                I have experience in many languages like Typescript, Javascript, Node, Java, PHP and Rust. I know technologies like
                React.js, React Native, Vue.js, Socket.IO, Pusher, MongoDb and MySQL / Postgres. In fact I made this site using React.js and
                Gatsby!
              </p>
              <p>
                I can also help with deployment, having used continous integration workflows and having some experience with docker and
                linux
              </p>
            </Col>
          </Row>
        </Container>
        <div
          css={css`
            ${genClass.redBG}
          `}
        >
          <Container cssClass={genClass.redBG}>
            <Row cssClass={genClass.minContainer}>
              <Col span={6}>
                <h1>
                  <ShadowSpan>Contact Me</ShadowSpan>
                </h1>
                <p>Let's start working!</p>
                <AltHomeButton to="contact">Contact Now</AltHomeButton>
              </Col>
            </Row>
          </Container>
        </div>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
