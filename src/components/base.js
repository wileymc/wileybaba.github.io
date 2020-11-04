import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.headingColor};
`;
export const Card = styled.div`
  align-content: baseline;
  width: auto;
  padding: 1rem;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  margin: 1.5rem 0;
  display: flex;
  grid-gap: 1rem;

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
  p {
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
