import styled from 'styled-components'

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;

  margin: 1rem 0;

  color: ${props => props.theme.colors.primary}
`;
