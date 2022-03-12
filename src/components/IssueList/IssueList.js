import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { REPO_INFO_API, TOKEN } from '../../config';
import Issue from './Issue';
import StatusMessage from '../StatusMessage/StatusMessage';
import Pagination from 'rc-pagination';

const IssueList = ({ repositories }) => {
  const [issues, setIssues] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  const pageSize = 5;
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPageIssues = issues.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getIssues = useCallback(async () => {
    if (!repositories.length) {
      setStatusMessage('Repository를 추가해 주세요.');
      setIssues([]);
      return;
    }
    repositories.length && setStatusMessage('Loading...');

    try {
      const result = await Promise.all(
        repositories.map(repository => {
          return axios(
            `${REPO_INFO_API}/${repository}/issues`,
            TOKEN && {
              headers: {
                Authorization: `token ${TOKEN}`,
              },
            }
          );
        })
      );

      const receivedIssues = [];
      await result.forEach(issues => {
        issues.data.forEach(issue => {
          const {
            id,
            user,
            title,
            created_at,
            labels,
            html_url,
            body,
            comments_url,
            repository_url,
          } = issue;

          receivedIssues.push({
            id,
            user: {
              htmlUrl: user.html_url,
              avatarUrl: user.avatar_url,
              login: user.login,
            },
            title,
            createdAt: new Date(
              Date.parse(created_at.substr(0, 20))
            ).toLocaleString(),
            labels,
            htmlUrl: html_url,
            body,
            commentsUrl: comments_url,
            repositoryName: repository_url.split('/').pop(),
          });
        });
      });

      const sortedIssues = await receivedIssues.sort((a, b) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });

      setIssues(sortedIssues);
      setTotalCount(sortedIssues.length);
      setCurrentPage(1);

      sortedIssues.length
        ? setStatusMessage('')
        : setStatusMessage('등록된 Issue가 없습니다.');
    } catch (err) {
      console.log(err);
      setStatusMessage('에러가 발생하였습니다.');
    }
  }, [repositories]);

  useEffect(() => {
    getIssues();
  }, [repositories, getIssues]);

  const handleRefreshClick = () => {
    getIssues();
    setCurrentPage(1);
  };

  const handlePageNumberClick = page => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (statusMessage) {
    return (
      <IssueListContainer>
        <StatusMessage message={statusMessage} />
      </IssueListContainer>
    );
  }

  return (
    <IssueListContainer>
      <RefreshButton
        alt="refresh"
        src="/images/refresh.png"
        onClick={handleRefreshClick}
      />
      {currentPageIssues.map(issue => {
        return <Issue key={issue.id} issue={issue} />;
      })}
      <Pagination
        total={totalCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={handlePageNumberClick}
      />
    </IssueListContainer>
  );
};

export default IssueList;

const IssueListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RefreshButton = styled.img`
  width: 40px;
  height: 40px;
  margin: 1rem;
  cursor: pointer;
`;
