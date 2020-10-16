import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import { Row } from '../components/Row'
import Col from '../components/Col'
import Container from '../components/Container'
import { colors } from '../styles/variables'
import StickyNav from '../components/StickyNav'
import Footer from '../components/Footer'

const MessageStyle = css`
  width: 100%;
  resize: none;
`

const Contact = () => (
  <IndexLayout>
    <Page>
      <StickyNav />
      <Container>
        <Row>
          <Col span={3}>
            <h1>Contact</h1>
            <p>Name</p>
            <input type="text" />
            <p>Email</p>
            <input type="email" />
            <p>Message</p>
            <textarea rows={8} css={MessageStyle} />
            <input type="submit" />
          </Col>
          <Col span={3}>
            <p>Hire me</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Page>
  </IndexLayout>
)

export default Contact
