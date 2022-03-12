import React from 'react';
import styled from 'styled-components';

const StatusMessage = ({ message }) => {
  return <StatusMessageContainer>{message}</StatusMessageContainer>;
};

export default StatusMessage;

const StatusMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  height: 600px;
  font-size: 30px;
  color: gray;
`;
