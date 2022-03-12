import React from 'react';
import styled from 'styled-components';

const Label = ({ label }) => {
  return (
    <LabelContainer color={label.color} label={label.name}>
      {label.name}
    </LabelContainer>
  );
};

export default Label;

const LabelContainer = styled.span`
  margin-right: 0.5rem;
  padding: 0.1rem 0.5rem;
  background-color: #${props => props.color};
  border-radius: 20px;
  border: 1px solid #dddddd;
`;
