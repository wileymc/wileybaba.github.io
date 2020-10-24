import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.headingColor};
`;
export const Card = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto;
  align-content: baseline;
  width: auto;
  padding: 1rem;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  margin: 1.5rem 0;
  h1 {
    font-size: 1.5em;
    margin: 0;
  }
  h2 {
    font-size: 1.2em;
  }
  p {
    margin: 0;
    font-size: 1em;
  }

  img {
    height: 200px;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;
