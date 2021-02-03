import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { margin } from 'polished'
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
        <Row css={{ marginTop: 0, paddingTop: 0 }}>
          {/* <h1>Interested in working together or even just having a chat?</h1> */}
          <Col span={3} css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Use the form to get in contact straight away or email ross@rossmacd.com</p>
          </Col>
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
        </Row>
      </Container>
      <Footer />
    </Page>
  </IndexLayout>
)

export default Contact
