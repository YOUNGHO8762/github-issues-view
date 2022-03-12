import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Nav = () => {
  const [input, setInput] = useState('');
  const history = useHistory();

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    setInput('');
    history.push('/');
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSearchClick = e => {
    history.push(`/repository/${input}`);
  };

  return (
    <NavContainer>
      <Content>
        <Icon alt="home" src="/images/home.png" onClick={handleHomeClick} />
        <SearchBoxWrapper onSubmit={handleSearchClick}>
          <SearchBox value={input} onChange={handleChange} />
          <SearchIcon
            alt="search"
            src="/images/search.png"
            onClick={handleSearchClick}
          />
        </SearchBoxWrapper>
      </Content>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: fix;
  position: fixed;
  justify-content: center;
  width: 100%;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 1rem 0rem;
`;

const SearchBoxWrapper = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchBox = styled.input.attrs({
  type: 'text',
  placeholder: 'Search',
})`
  width: 400px;
  height: 50px;
  padding: 0rem 1rem;
  border: 1px solid black;
  border-radius: 30px;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 15px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
