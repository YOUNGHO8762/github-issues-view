import React from 'react';
import styled from 'styled-components';
import AddedRepository from './AddedRepository';

const AddedRepositoryList = ({ repositories, onDeleteClick }) => {
  return (
    <AddedRepositoriesContainer>
      {repositories.map((repository, index) => {
        return (
          <AddedRepository
            key={index}
            repository={repository}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </AddedRepositoriesContainer>
  );
};

export default AddedRepositoryList;

const AddedRepositoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
