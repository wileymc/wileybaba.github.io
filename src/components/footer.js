import { Link } from 'gatsby';
import React, { useContext } from 'react';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillMail,
} from 'react-icons/ai';
import { FaCodeBranch } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.footer`
  margin: 5vh 0;
  display: flex;
  float: right;
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
