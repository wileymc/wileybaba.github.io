import { Link } from 'gatsby';
import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillMail,
} from 'react-icons/ai';
import { FaCodeBranch } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.footer`
  margin-top: 5vh;
  display: flex;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.background};
  transition: all 0.5s ease-out;
  svg {
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.icons};
    cursor: pointer;
    transition: all 0.5s ease-out;
    &:hover {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

const Footer = () => (
  <Container>
    <AiFillTwitterCircle size="1.5rem" />
    <AiFillInstagram size="1.5rem" />
    <AiFillMail size="1.5rem" />
    <FaCodeBranch size="1.5rem" />
  </Container>
);

export default Footer;
