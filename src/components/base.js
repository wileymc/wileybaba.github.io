import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.headingColor};
`;
export const Card = styled.div`
  align-content: baseline;
  width: auto;
  height: fit-content;
  padding: 1rem;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.cardBackground};
  transition: all 0.5s ease-out;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    transform: scale(1.02)
  }

  h1 {
    font-size: 1.5em;
    margin: 1rem 0 0 0;
  }
  h2 {
    font-size: 1.2em;
  }
  p {
    margin: 0;
    font-size: 1em;
  }
`;

export const CardGrid = styled.main`
  display: grid;
  grid-template-columns: 'repeat(${(props) => props.columns ?? 2}, 1fr';
  grid-gap: 1.5rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    grid-gap: 1rem;
  }
`;

export const BookCard = styled(Card)`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'image title'
    'image description';
  grid-template-columns: 150px auto;

  div {
    grid-area: title;
  }
  h1 {
    font-size: 1.5em;
    margin: 0;
  }
  h2 {
    font-size: 1.2em;
  }
  .description {
    margin: 0;
    font-size: 1em;
    grid-area: description;
  }

  img {
    width: 150px;
    grid-area: image;
  }

  @media only screen and (max-width: 760px) {
    grid-template-areas:
      'image title'
      'description description';
    grid-template-columns: 75px auto;

    img {
      width: 75px;
    }
  }
`;

export const Tag = styled.button`
  font-family: 'Helvetica Neue';
  font-size: 1em;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    201deg,
    rgba(0, 250, 154, 1) 3%,
    rgba(30, 144, 255, 1) 56%
  );

  &:hover {
    transform: scale(1.02);
  }

  &:disabled {
    cursor: 'not-allowed';
  }
`;
