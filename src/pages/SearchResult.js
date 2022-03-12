import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import useLocalStorage from '../hooks/useLocalStorage';
import SearchedRepositoryList from '../components/SearchRepositoryList/SearchedRepositoryList';
import StatusMessage from '../components/StatusMessage/StatusMessage';
import { REPOS_SEARCH_API, TOKEN } from '../config';

const SearchResult = ({ match }) => {
  const [searchedRepositories, setSearchedRepositories] = useState([]);
  const [repositories, setRepositories] = useLocalStorage('repository', []);
  const [isLoading, setIsLoading] = useState(false);
  const { repositoryName } = match.params;

  const getSearchedRepository = useCallback(async () => {
    try {
      const result = await axios(
        `${REPOS_SEARCH_API}/repositories?q=${repositoryName}%20in:name`,
        TOKEN && {
          headers: {
            authorization: `token ${TOKEN}`,
          },
        }
      );

      setSearchedRepositories(result.data.items);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  }, [repositoryName]);

  useEffect(() => {
    getSearchedRepository();
  }, [repositoryName, getSearchedRepository]);

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
      {!isLoading ? (
        <StatusMessage message="Loading..." />
      ) : searchedRepositories.length ? (
        <Content>
          <RepositoryCount>
            {searchedRepositories.length} repository results
          </RepositoryCount>
          <SearchedRepositoryList
            searchedRepositories={searchedRepositories}
            repositories={repositories}
            onClick={handleClick}
          />
        </Content>
      ) : (
        <StatusMessage message="검색된 Repository가 없습니다." />
      )}
    </ResultContainer>
  );
};

export default SearchResult;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const RepositoryCount = styled.div`
  padding: 2rem 0rem;
  font-size: 30px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 1024px;
`;
