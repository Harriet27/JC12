import React from 'react';
import {Header, Body, Title} from 'native-base';

const HeaderWoIcon = ({title}) => {
  return (
    <Header>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
};

export default HeaderWoIcon;
