import React from 'react';
import styled from 'styled-components';

import useLocalStorage from '../hooks/useLocalStorage';
import IssueList from '../components/IssueList/IssueList';
import AddedRepositoryList from '../components/AddedRepository/AddedRepositoryList';

const Main = () => {
  const [repositories, setRepositories] = useLocalStorage('repository', []);

  const handleDeleteClick = deleteRepository => {
    setRepositories(
      repositories.filter(repository => repository !== deleteRepository)
    );
  };

  return (
    <MainContainer>
      <MainContent>
        <AddedRepositoryList
          repositories={repositories}
          onDeleteClick={handleDeleteClick}
        />
        <IssueList repositories={repositories} />
      </MainContent>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 7rem 0rem;
`;

const MainContent = styled.div`
  width: 1024px;
`;
