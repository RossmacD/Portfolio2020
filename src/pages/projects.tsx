import * as React from 'react'
import { Link, StaticQuery } from 'gatsby'

import { css } from '@emotion/core'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import StickyNav from '../components/StickyNav'
import { Row } from '../components/Row'
import Col from '../components/Col'
import { projectsQueryShort, ProjectsShortReturn } from '../components/ProjectCarousel'
import ProjectShortCard from '../components/ProjectShortCard'

const ProjectsPage = () => (
  <StaticQuery
    query={projectsQueryShort}
    render={(data: ProjectsShortReturn) => (
      <IndexLayout>
        <Page>
          <StickyNav />
          <Container>
            <Row
              cssClass={`
                 margin-bottom:0;
                `}
            >
              <Col span={6}>
                <h1>Projects</h1>
              </Col>
            </Row>
            <Row>
              <Col
                span={6}
                cssClass={`
                  margin-top: 2rem;
                  display: grid;
                  grid-auto-rows: 1fr;
                  grid-template-columns: repeat(auto-fit, minmax(24.4rem, 1fr));
                  width: 100%;
                  grid-row-gap: 1rem;
                `}
              >
                {data.allMarkdownRemark.nodes.map((markdownNode, i) => (
                  <ProjectShortCard
                    key={markdownNode.id}
                    title={markdownNode.frontmatter.title}
                    description={markdownNode.frontmatter.description}
                    to={markdownNode.fields.slug}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </Page>
      </IndexLayout>
    )}
  />
)

export default ProjectsPage
