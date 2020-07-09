import React from 'react'
import { css } from '@emotion/core'
import Scrollbar from 'react-scrollbars-custom'
import ProjectShortCard from './ProjectShortCard'
import { genClass } from '../styles/genericClasses'

const ProjectCarousel = () => {
  return (
    <Scrollbar
      style={{
        height: '16rem',
        width: '100%',
        overflowX: 'auto',
        padding: '1rem 0',
        margin: '1rem 0'
      }}
      contentProps={{
        renderer: props => {
          const { elementRef, ...restProps } = props
          return (
            <span
              {...restProps}
              ref={elementRef}
              style={{
                height: '100%',
                width: '100%',
                display: 'grid',
                gridGap: '1.5rem',
                gridTemplateColumns: 'repeat(6,24.4rem)',
                scrollSnapType: 'x proximity',
                gridTemplateRows: '1'
              }}
            />
          )
        }
      }}
      trackXProps={{
        renderer: props => {
          const { elementRef, ...restProps } = props
          return <span {...restProps} ref={elementRef} css={css(genClass.fauxContainter)} />
        }
      }}
    >
      {/* // <div */}
      {/* //   style={{
    //     display: 'grid',
    //     gridGap: '1.5rem',
    //     gridTemplateColumns: 'repeat(6,24.4rem)',
    //     height: '16rem',
    //     width: '100%',
    //     overflowX: 'auto',
    //     gridTemplateRows: '1',
    //     scrollSnapType: 'x proximity',
    //     padding: '1rem 0'
    //   }}
    // > */}
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
      {/* </div> */}
    </Scrollbar>
  )
}

export default ProjectCarousel
