import React from 'react';
import styled from 'styled-components';

const SearchedRepository = ({ searchedRepository, onClick, repositories }) => {
  const { owner, language, created_at, full_name, html_url } =
    searchedRepository;

  const reportingDate = new Date(
    Date.parse(created_at.substr(0, 20))
  ).toLocaleString();

  return (
    <RepositoryContainer>
      <Content>
        <a href={owner.html_url}>
          <Avatar src={owner.avatar_url} />
        </a>
        <RepositoryName>{full_name}</RepositoryName>
        {language && <CreatedAt>language : {language}</CreatedAt>}
        <CreatedAt>
          <span>Create_At : </span>
          {reportingDate}
        </CreatedAt>
      </Content>
      <div>
        <AddButton
          onClick={() => onClick(full_name)}
          repositories={repositories}
          full_name={full_name}
        />
        <a href={html_url}>
          <Icon src="/images/github.png" />
        </a>
      </div>
    </RepositoryContainer>
  );
};

export default SearchedRepository;

const RepositoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  border-top: 1px solid #dddddd;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const RepositoryName = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const CreatedAt = styled.span`
  margin-right: 0.5rem;
  color: gray;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: 50%;
  border: 1px solid #dddddd;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const AddButton = styled.img.attrs(props => ({
  src: props.repositories.includes(props.full_name)
    ? '/images/check.png'
    : '/images/add.png',
}))`
  width: 30px;
  height: 30px;
  margin-left: 0.5rem;
  cursor: pointer;
`;
