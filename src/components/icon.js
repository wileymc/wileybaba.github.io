import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const HeavenlyBody = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

function Icon({ isDark, setIsDark }) {
  const themeContext = useContext(ThemeContext);

  const handleClick = () => {
    localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  };

  return <HeavenlyBody src={themeContext.icon} onClick={handleClick} />;
}

export default Icon;
