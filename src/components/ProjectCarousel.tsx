import React from 'react'
import { css } from '@emotion/core'
import SimpleBar from 'simplebar-react'
import ProjectShortCard from './ProjectShortCard'
import 'simplebar/dist/simplebar.min.css'
import { padding } from 'polished'

const ProjectCarousel = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridGap: '1.5rem',
        gridTemplateColumns: 'repeat(6,24.4rem)',
        height: '16rem',
        width: '100%',
        overflowX: 'auto',
        gridTemplateRows: '1',
        scrollSnapType: 'x proximity',
        padding: '1rem 0'
      }}
    >
      {/* <div
        css={css`
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          height: 16rem;
          flex-shrink: 0;
          flex-wrap: nowrap;
        `}
      > */}
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
      <ProjectShortCard />
      {/* </div> */}
    </div>
  )
}

export default ProjectCarousel
