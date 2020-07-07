import React from 'react'
import { css } from '@emotion/core'
import ProjectShortCard from './ProjectShortCard'

const ProjectCarousel = () => {
  return (
    <div
      css={css`
        display: flex;
        // min-width:min-content
        overflow-x: scroll;
        overflow-y: hidden;
        // width: 100vw;
        height: 16rem;
        flex-shrink: 0;
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
