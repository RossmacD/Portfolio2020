import * as React from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Display2 from '../components/Display2'
import StickyNav from '../components/StickyNav'
import Footer from '../components/Footer'
import { Row } from '../components/Row'
import Col from '../components/Col'
import { colors } from '../styles/variables'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        description: string
        category: string
        layout: string
        number: number
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <StickyNav />
      <Container>
        <Row cssClass="margin:0;padding:0;">
          <Col span={6}>
            <Display2
              hide={false}
              css={css`
                animation: none;
                font-size: 2.5vw;
              `}
            >
              {data.markdownRemark.frontmatter.title}
            </Display2>
            <h2
              css={css`
                margin-bottom: 3rem;
              `}
            >
              {data.markdownRemark.frontmatter.description}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        category
        description
        layout
        number
        title
      }
    }
  }
`
