import React from 'react'
import { css } from '@emotion/core'
import Scrollbar from 'react-scrollbars-custom'
import { StaticQuery, graphql } from 'gatsby'
import ProjectShortCard from './ProjectShortCard'
import { genClass } from '../styles/genericClasses'

export const projectsQueryShort = graphql`
  query GetProjectsListShort {
    allMarkdownRemark(limit: 5) {
      nodes {
        frontmatter {
          category
          description
          layout
          number
          title
        }
        id
        fields {
          slug
        }
      }
    }
  }
`

export interface ProjectsShortReturn {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        title: string
        description: string
        category: string
        layout: string
        number: number
      }
      id: string
      fields: {
        slug: string
      }
    }[]
  }
}

const ProjectCarousel = () => {
  return (
    <StaticQuery
      query={projectsQueryShort}
      render={(data: ProjectsShortReturn) => (
        <Scrollbar
          style={{
            height: '16rem',
            width: '100%',
            overflowX: 'auto',
            padding: '1rem 0',
            marginLeft: 'max(50% - 600px, 0px)',
            marginTop: '1rem',
            marginBottom: '1rem'
          }}
          contentProps={{
            renderer: props => {
              const { elementRef, ...restProps } = props
              return (
                <span
                  {...restProps}
                  ref={elementRef}
                  css={css`
                    ::after {
                      content: ' ';
                      width: 24.4rem;
                    }
                  `}
                  style={{
                    height: '100%',
                    paddingLeft: '1.5rem',
                    display: 'grid',
                    gridGap: '1.5rem',
                    gridTemplateColumns: 'repeat(6,24.4rem)',
                    scrollSnapType: 'x proximity'
                  }}
                />
              )
            }
          }}
          trackXProps={{
            renderer: props => {
              const { elementRef, ...restProps } = props
              return <span {...restProps} ref={elementRef} css={css(genClass.maxCont)} />
            }
          }}
        >
          {data.allMarkdownRemark.nodes
            .sort((b, a) => (a.frontmatter.number > b.frontmatter.number ? 1 : b.frontmatter.number > a.frontmatter.number ? -1 : 0))
            .map((markdownNode, i) => (
              <ProjectShortCard
                key={markdownNode.id}
                title={markdownNode.frontmatter.title}
                description={markdownNode.frontmatter.description}
                category={markdownNode.frontmatter.category}
                to={markdownNode.fields.slug}
              />
            ))}
        </Scrollbar>
      )}
    />
  )
}

export default ProjectCarousel
