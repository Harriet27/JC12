import React from 'react';
import {
  // Container,
  Header,
  Left,
  // Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

const FeedHeader = () => {
  return (
    <Header>
      <Left>
        <Title>Project</Title>
      </Left>
      <Right>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Right>
    </Header>
  );
};

export default FeedHeader;
