import React from 'react'
import { css } from '@emotion/core'
import ProjectShortCard from './ProjectShortCard'

const ProjectCarousel = () => {
  return (
    <div
      css={css`
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        // overflow: visible;
        height: 16rem;
        flex-shrink: 0;
        flex-wrap: nowrap;
      `}
    >
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
    </div>
  )
}

export default ProjectCarousel
