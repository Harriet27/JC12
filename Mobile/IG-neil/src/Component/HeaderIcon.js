import React from 'react';
import {Header, Left, Right, Button, Icon, Title} from 'native-base';

const HeaderIcon = ({title, toggle}) => {
  return (
    <Header>
      <Left>
        <Title>{title}</Title>
      </Left>
      <Right>
        <Button transparent onPress={() => toggle.toggleDrawer()}>
          <Icon name="menu" />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderIcon;
