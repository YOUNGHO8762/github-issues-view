import React from 'react';
import styled from 'styled-components';

const Comment = ({ comment }) => {
  const { user, body, createdAt } = comment;

  return (
    <CommentContainer>
      <Avatar src={user.avatarUrl} />
      <div>
        <UserName>{user.login}</UserName>
        <Content>{body}</Content>
        <CreatedAt>{createdAt}</CreatedAt>
      </div>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  padding: 0.2rem 1.5rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Avatar = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 0.5rem;
  border-radius: 50%;
  border: 1px solid #dddddd;
`;

const Content = styled.div`
  word-break: break-all;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const CreatedAt = styled.div`
  font-size: 0.7rem;
  color: gray;
`;
