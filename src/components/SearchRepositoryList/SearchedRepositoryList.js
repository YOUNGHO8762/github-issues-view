import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import SearchedRepository from './SearchedRepository';
import { REPOS_SEARCH_API, TOKEN } from '../../config';
import axios from 'axios';
import StatusMessage from '../StatusMessage/StatusMessage';
import Pagination from 'rc-pagination';

const SearchedRepositoryList = ({ onClick, repositories, repositoryName }) => {
  const [searchedRepositories, setSearchedRepositories] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  const pageSize = 10;
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getSearchedRepository = useCallback(async () => {
    setStatusMessage('Loading...');
    try {
      const result = await axios(
        `${REPOS_SEARCH_API}/repositories?q=${repositoryName}%20in:name&page=${currentPage}&per_page=${pageSize}
        `,
        TOKEN && {
          headers: {
            authorization: `token ${TOKEN}`,
          },
        }
      );
      console.log(result.data);
      const { items, total_count } = result.data;
      if (!items.length) {
        setStatusMessage('검색된 Repository가 없습니다.');
        return;
      }

      setSearchedRepositories(items);
      setTotalCount(total_count);
      setStatusMessage('');
    } catch (err) {
      console.log(err);
      setStatusMessage('에러가 발생하였습니다.');
    }
  }, [repositoryName, currentPage]);

  useEffect(() => {
    getSearchedRepository();
  }, [repositoryName, getSearchedRepository]);

  const handlePageNumberClick = page => {
    setCurrentPage(page);
  };

  if (statusMessage) {
    return (
      <SearchedRepositoryListContainer>
        <StatusMessage message={statusMessage} />
      </SearchedRepositoryListContainer>
    );
  }

  return (
    <SearchedRepositoryListContainer>
      <RepositoryCount>{totalCount} repository results</RepositoryCount>
      {searchedRepositories.map(searchedRepository => (
        <SearchedRepository
          key={searchedRepository.id}
          searchedRepository={searchedRepository}
          repositories={repositories}
          onClick={onClick}
        />
      ))}
      <Pagination
        total={totalCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={handlePageNumberClick}
      />
    </SearchedRepositoryListContainer>
  );
};

export default SearchedRepositoryList;

const SearchedRepositoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 7rem 0;
`;

const RepositoryCount = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
