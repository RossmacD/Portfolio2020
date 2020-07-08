import styled from '@emotion/styled'
import { getEmSize } from './mixins'
import { breakpoints } from './variables'

export const StyledHero = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    height: 100vh;
  }
`
export const FixedDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`
export const DocflowFix = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
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
export const ShadowSpan = styled.span`
  // text-shadow: 3px 3px 0px #8400ff, -1px -1px 0px #ff005a;
`
