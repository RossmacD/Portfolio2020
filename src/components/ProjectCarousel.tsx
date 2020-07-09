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
          title
          description
        }
        id
        fields {
          slug
        }
      }
    }
  }
`

interface CarouselProps {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        title: string
        description: string
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
      render={(data: CarouselProps) => (
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
          {/* <ProjectShortCard />
          <ProjectShortCard />
          <ProjectShortCard />
          <ProjectShortCard />
          <ProjectShortCard />
          <ProjectShortCard /> */}
          {console.log('data', data)}
          {data.allMarkdownRemark.nodes.map((markdownNode, i) => (
            <ProjectShortCard
              key={markdownNode.id}
              title={markdownNode.frontmatter.title}
              description={markdownNode.frontmatter.description}
              to={markdownNode.fields.slug}
            />
          ))}
        </Scrollbar>
      )}
    />
  )
}

export default ProjectCarousel
