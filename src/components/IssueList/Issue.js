import React from 'react';
import styled from 'styled-components';
import CommentList from '../CommentList/CommentList';
import LabelList from '../Labels/LabelList';

const Issue = ({ issue }) => {
  const {
    user,
    title,
    createdAt,
    labels,
    htmlUrl,
    body,
    commentsUrl,
    repositoryName,
  } = issue;

  return (
    <IssueContainer>
      <ContentWrapper>
        <Information>
          <InformationContent>
            <a href={user.htmlUrl}>
              <Avatar src={user.avatarUrl} />
            </a>
            <div>
              <IssueName>{title}</IssueName>
              <LabelList labels={labels} />
              <div>
                <RepositoryName>Repository : {repositoryName}</RepositoryName>
                <UserId>User_Id : {user.login}</UserId>
                <CreatedAt>
                  <span>Create_At : </span>
                  {createdAt}
                </CreatedAt>
              </div>
            </div>
          </InformationContent>
          <a href={htmlUrl}>
            <GitHub src="/images/github.png" />
          </a>
        </Information>
        <Content>{body}</Content>
      </ContentWrapper>
      <CommentList commentsUrl={commentsUrl} />
    </IssueContainer>
  );
};

export default Issue;

const IssueContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem;
  border: 1px solid #dddddd;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InformationContent = styled.div`
  display: flex;
  align-items: center;
`;

const IssueName = styled.span`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const RepositoryName = styled.span`
  margin-right: 0.5rem;
  color: gray;
`;

const UserId = styled(RepositoryName)``;

const CreatedAt = styled.span`
  color: gray;
`;

const Content = styled.div`
  margin: 1.5rem 0 0 0;
  word-break: break-all;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: 50%;
  border: 1px solid #dddddd;
`;

const GitHub = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
