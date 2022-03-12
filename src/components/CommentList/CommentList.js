import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Comment from './Comment';
import { TOKEN } from '../../config';

const CommentList = ({ commentsUrl }) => {
  const [comments, setComments] = useState([]);

  const getComments = useCallback(async () => {
    try {
      const result = await axios(
        commentsUrl,
        TOKEN && {
          headers: {
            Authorization: `token ${TOKEN}`,
          },
        }
      );

      const comments = [];
      await result.data.forEach(comment => {
        const { id, user, body, created_at } = comment;

        comments.push({
          id,
          user: {
            avatarUrl: user.avatar_url,
            login: user.login,
          },
          createdAt: new Date(
            Date.parse(created_at.substr(0, 20))
          ).toLocaleString(),
          body,
        });
      });

      setComments(comments);
    } catch (err) {
      console.log(err);
    }
  }, [commentsUrl]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <CommentsContainer>
      {comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </CommentsContainer>
  );
};

export default CommentList;

const CommentsContainer = styled.div`
  margin-top: -1px;
  border: 1px solid #dddddd;
`;
