import styled from '@emotion/styled'
import { getEmSize } from './mixins'
import { widths, breakpoints } from './variables'

export const Grid = styled.div`
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  max-width: ${getEmSize(widths.lg)}em;
  width: auto;
`
export const StyledHero = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FixedDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`
export const DocflowFix = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 0.5rem;
`

export const DesktopHide = styled.span`
  @media (min-width: ${getEmSize(breakpoints.sm)}em) {
    display: none;
  }
`
export const DesktopShow = styled.span`
  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    display: none;
  }
`
