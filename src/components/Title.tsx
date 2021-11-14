import React from 'react';
import { Header, HeaderText } from '../styled-components';

const Title = () => {
  const title = 'Weather App';
  return (
    <Header>
      <HeaderText>
        {title}
      </HeaderText>
    </Header>
  );
};

export default Title;
