import * as React from 'react'
// import { Link } from 'gatsby'
import { css, keyframes } from '@emotion/core'
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
import { breakpoints, colors } from '../styles/variables'
import ProjectCarousel from '../components/ProjectCarousel'
import headGIF from '../assets/hack.gif'
import { ProjectSvg } from '../assets/Project'
import Footer from '../components/Footer'
import { getEmSize } from '../styles/mixins'
import { Terminal } from '../components/Terminal'
import StickyNav from '../components/StickyNav'
// import '@lottiefiles/lottie-player'

// import { animOne } from '../animations/helpers'

const IndexPage = () => {
  const [hideHero, setHideHero] = React.useState(false)

  const float = keyframes`
  0% {
    transform: scale(2) translateX(-14%) translateY(0rem);
                //Media Query here
    @media screen and (max-width: ${getEmSize(breakpoints.md)}em) {
      transform: scale(2) translateX(-2%) translateY(0rem);
      width: 100%;
      height: 50%;
    }
	}
	50% {
		transform: scale(2) translateX(-14%) translateY(0.25rem);
                //Media Query here
    @media screen and (max-width: ${getEmSize(breakpoints.md)}em) {
      transform: scale(2) translateX(-2%) translateY(0rem);
      width: 100%;
      height: 50%;
    }
	}
	100% {
    transform: scale(2) translateX(-14%) translateY(0rem);
                //Media Query here
    @media screen and (max-width: ${getEmSize(breakpoints.md)}em) {
      transform: scale(2) translateX(-2%) translateY(0rem);
      width: 100%;
      height: 50%;
    }
	}
`

  const float2 = keyframes`
0% {
  transform: scale(2) translateX(14%) translateY(0rem);
              //Media Query here
  @media screen and (max-width: ${getEmSize(breakpoints.md)}em) {
    transform: scale(2) translateX(2%) translateY(0rem);
    width: 100%;
    height: 50%;
  }
}
50% {
  transform: scale(2) translateX(14%) translateY(0.25rem);
              //Media Query here
  @media screen and (max-width: ${getEmSize(breakpoints.md)}em) {
    transform: scale(2) translateX(2%) translateY(0rem);
    width: 100%;
    height: 50%;
  }
}
100% {
  transform: scale(2) translateX(14%) translateY(0rem);
              //Media Query here
  @media screen and (max-width: ${getEmSize(breakpoints.md)}em) {
    transform: scale(2) translateX(2%) translateY(0rem);
    width: 100%;
    height: 50%;
  }
}
`

  // const [user, setUser] = React.useState(null)
  // React.useEffect(() => {
  //   // get data from GitHub api
  //   fetch(`https://api.github.com/users/RossmacD`)
  //     .then(response => response.json()) // parse JSON from request
  //     .then(resultData => {
  //       setStarsCount(resultData.stargazers_count)
  //     }) // set data for the number of stars
  // }, [])
  return (
    <IndexLayout>
      <StickyNav socialOnly sticky={false} />
      <DocflowFix>
        <HeroTitle hide={hideHero} trigger={setHideHero} />
      </DocflowFix>
      <Page>
        <Container>
          <Row>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              css={css`
                position: absolute;
                transform: scale(2) translateX(-14%);
                bottom: 0;
                right: 0;
                z-index: 1;
                opacity: 0.45;
                //Media Query here
                @media screen and (max-width: ${getEmSize(breakpoints.md)}em) {
                  transform: scale(2) translateX(-2%);
                  width: 100%;
                  height: 50%;
                }
                height: 100%;
                width: auto;

                animation: ${float} 6s ease infinite;
              `}
            >
              <path
                fill="#ff005a"
                d="M56.5,-59.7C72.3,-54.1,83.5,-35.4,81.7,-18.4C80,-1.4,65.3,13.9,54.2,29.6C43.1,45.3,35.7,61.3,23.9,65.5C12.2,69.6,-3.7,61.7,-17.5,54.1C-31.3,46.4,-43,39,-54,27.5C-65,16,-75.4,0.4,-74.2,-14.2C-73,-28.9,-60.2,-42.8,-45.9,-48.7C-31.6,-54.6,-15.8,-52.6,2.3,-55.3C20.4,-58,40.7,-65.4,56.5,-59.7Z"
                transform="translate(100 100)"
              />
            </svg>
            <Col
              span={3}
              cssClass={css`
                z-index: 2;
                padding: 1rem 0.5rem;
              `}
            >
              <h1>
                Hi, I'm <VisibilityTrigger trigger={setHideHero}>Ross MacDonald </VisibilityTrigger>
              </h1>
              <p>I develop websites, software and apps</p>
              <p>
                Im an Irish full-stack developer who has experience with many technologies. Creating apps as both a leader of development
                and in a supporting capacity.
              </p>
              <p>
                I have been working as a freelance developer and contractor for over 4 years. Here are some projects I have worked on
                {/* <span role="img" aria-label="laptop">
                  💻
                </span> */}
              </p>
              <HomeButton to="https://github.com/RossmacD" newWindow>
                See More
              </HomeButton>
            </Col>
            <Col
              span={3}
              cssClass={
                genClass.flexCenter +
                css`
                  position: relative;
                `
              }
            >
              <img
                src={headGIF}
                alt="Rotating head wireframe"
                css={css`
                  clip-path: circle(50% at 50% 50%);
                  z-index: 2;
                  background-color: ${colors.black};
                  /* opacity: 0; */
                  /* animation: fadein2 0.8s ease-out 1s forwards; */
                `}
              />
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
              clip-path: polygon(0px 84%, 100% 96%, 100% 18%, 0px 6%);
              // transform: translate3d(0px, -50px, 0px);
              background-color: ${colors.red};
              /* background-color: #ff005a; */
            `}
          />
          <div css={css(genClass.breakContainer)}>
            <Row cssClass={genClass.noMargin}>
              <Col span={6} cssClass={genClass.flexCol}>
                <div css={css(genClass.fauxContainter + genClass.flexCol)}>
                  <h1
                    css={css`
                      display: flex;
                      /* justify-content: center; */
                      align-items: center;
                    `}
                  >
                    <ProjectSvg /> Projects{' '}
                  </h1>
                </div>

                <ProjectCarousel />
                <div css={css(genClass.fauxContainter + genClass.flexCol)}>
                  <AltHomeButton to="/projects">All</AltHomeButton>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Container>
          <Row>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              css={css`
                position: absolute;
                transform: scale(2) translateX(14%);
                top: 0;
                left: 0;
                z-index: 1;
                opacity: 0.45;
                //Media Query here
                @media screen and (max-width: ${getEmSize(breakpoints.md)}em) {
                  transform: scale(2) translateX(-2%);
                  width: 100%;
                  height: 50%;
                }
                height: 100%;
                width: auto;
                animation: ${float2} 6s ease infinite;
              `}
            >
              <path
                fill="#ff005a"
                d="M47.6,-61.3C62.8,-54.5,77,-42,83.9,-26C90.9,-10,90.5,9.6,81.3,22.9C72.1,36.1,54.1,42.9,39.1,51.3C24.1,59.7,12,69.7,-2.1,72.5C-16.1,75.4,-32.3,71,-43.9,61.5C-55.5,52,-62.6,37.3,-67.4,22C-72.2,6.7,-74.7,-9.2,-72.6,-26C-70.4,-42.7,-63.5,-60.3,-50.6,-67.9C-37.8,-75.5,-18.9,-73,-1.3,-71.2C16.2,-69.3,32.4,-68.1,47.6,-61.3Z"
                transform="translate(100 100)"
              />
            </svg>

            <Col
              span={3}
              cssClass={css`
                position: relative;
                overflow: hidden;
                margin-bottom: 4rem;
              `}
            >
              <Terminal />
            </Col>
            <Col
              span={3}
              cssClass={css`
                z-index: 2;
                margin-bottom: 4rem;
              `}
            >
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
            margin-top:8rem;
          `}
        >
          <Container cssClass={genClass.redBG}>
            <Row cssClass={genClass.minContainer}>
              <Col
                span={6}
                cssClass={css`
                  display: flex;
                  justify-content: center;
                  text-align: center;
                `}
              >
                <div>
                  <h1>
                    <ShadowSpan>Contact Me</ShadowSpan>
                  </h1>
                  <p>I'd love to hear from you. Let's start working together!</p>
                  <AltHomeButton to="contact">Contact Now</AltHomeButton>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
