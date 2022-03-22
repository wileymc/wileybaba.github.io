import { Link } from "gatsby";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";
import styled from "styled-components";

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
    <a
      href="https://twitter.com/wileymckayconte"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillTwitterCircle size="1.5rem" />
    </a>
    <a href="https://instagram.com/wileybaba" target="_blank" rel="noreferrer">
      <AiFillInstagram size="1.5rem" />
    </a>
    <a
      href="mailto: wileymckayconte@gmail.com"
      title="email wiley"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillMail size="1.5rem" />
    </a>
    <a
      href="https://github.com/wileymc/wileybaba.github.io"
      target="_blank"
      rel="noreferrer"
      title="fork this site"
    >
      <FaCodeBranch size="1.5rem" />
    </a>
  </Container>
);

export default Footer;
