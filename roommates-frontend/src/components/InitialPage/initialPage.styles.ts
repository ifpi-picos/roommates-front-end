import styled from 'styled-components'

export const Box = styled.div`
  background-color: ${props => props.theme.colors.primary};
  min-height: 100vh;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: ${props => props.theme.colors.lightest};
  width: 100%;
  max-width: 350px;
  min-height: 50vh;
  height: auto;
  padding: 2rem 1.5rem;
  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
