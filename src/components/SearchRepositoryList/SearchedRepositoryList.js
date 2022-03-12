import React from 'react';
import styled from 'styled-components';
import SearchedRepository from './SearchedRepository';

const SearchedRepositoryList = ({
  searchedRepositories,
  onClick,
  repositories,
}) => {
  return (
    <SearchedRepositoryListWrapper>
      {searchedRepositories.map(searchedRepository => (
        <SearchedRepository
          key={searchedRepository.id}
          searchedRepository={searchedRepository}
          repositories={repositories}
          onClick={onClick}
        />
      ))}
    </SearchedRepositoryListWrapper>
  );
};

export default SearchedRepositoryList;

const SearchedRepositoryListWrapper = styled.div`
  margin-bottom: 1rem;
`;
