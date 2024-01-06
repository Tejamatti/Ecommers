
import React, { useState} from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import ProductList from './ProductList';

const HeaderWrapper = styled.div`
  background-color: #2874f0;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 8px;
    margin-right: 10px;
    border: none;
    border-radius: 2px;
  }

  button {
    padding: 8px 16px;
    background-color: #ff9f00;
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      border-bottom: 2px solid #fff;
    }
  }
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('Samsung');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <HeaderWrapper>
        <Logo>Your Logo</Logo>
        <SearchBar>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button onClick={clearSearch}>Search</button>
        </SearchBar>
        <Navigation>
          <ul>
            <li><a>Home</a></li>
            <li><a>Categories</a></li>
            <li><a>Deals</a></li>
            <li><a>Account</a></li>
            <li><a>Cart</a></li>
          </ul>
        </Navigation>
      </HeaderWrapper>
      <Categories />
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default Header;
