import React from 'react';
import styled from 'styled-components';

const AddedRepository = ({ repository, onDeleteClick }) => {
  return (
    <AddedRepositoryContainer>
      {repository}
      <Remove onClick={() => onDeleteClick(repository)}>&#215;</Remove>
    </AddedRepositoryContainer>
  );
};

export default AddedRepository;

const AddedRepositoryContainer = styled.div`
  padding: 0.7rem;
  margin: 0.3rem;
  border-radius: 30px;
  border: 1px solid gray;
`;

const Remove = styled.span`
  margin-left: 0.2rem;
  color: red;
  font-weight: 900;
  cursor: pointer;
`;
