import styled from '@emotion/styled'

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 0.5rem;
  margin-top: 8rem;
  margin-bottom: 12rem;
  grid-auto-rows: 1fr;
  ${(props: RowProps) => props.cssClass || ''}
`

interface RowProps {
  cssClass?: string
}
