import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const LabelList = ({ labels }) => {
  return (
    <LabelListContainer>
      {labels.map(label => {
        return <Label key={label.id} label={label} />;
      })}
    </LabelListContainer>
  );
};

export default LabelList;

const LabelListContainer = styled.div`
  margin: 0.2rem 0rem;
`;
