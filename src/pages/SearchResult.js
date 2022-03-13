import React from 'react';
import styled from 'styled-components';

import useLocalStorage from '../hooks/useLocalStorage';
import SearchedRepositoryList from '../components/SearchRepositoryList/SearchedRepositoryList';

const SearchResult = ({ match }) => {
  const [repositories, setRepositories] = useLocalStorage('repository', []);
  const { repositoryName } = match.params;

  const handleClick = clickedRepository => {
    if (repositories.includes(clickedRepository))
      return deleteRepository(clickedRepository);
    if (repositories.length === 4)
      return alert('Repository는 최대 4개까지만 추가가 가능합니다!');
    setRepositories([...repositories, clickedRepository]);
  };

  const deleteRepository = clickedRepository => {
    setRepositories(
      repositories.filter(repository => repository !== clickedRepository)
    );
  };

  return (
    <ResultContainer>
      <SearchedRepositoryList
        repositories={repositories}
        repositoryName={repositoryName}
        onClick={handleClick}
      />
    </ResultContainer>
  );
};

export default SearchResult;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
