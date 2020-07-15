import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
import {API_URL} from '../Support/API_URL';

const PostCard = ({imagePath, username, displayPicture, caption}) => {
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={
                displayPicture
                  ? {uri: `${API_URL}/${displayPicture}`}
                  : require('../Assets/defaultpicture.jpg')
              }
            />
            <Body>
              <Text>{username}</Text>
              <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{uri: `${API_URL}/${imagePath}`}}
            style={styles.image}
          />
        </CardItem>
        <CardItem>
          <Text>{`${username}  ${caption}`}</Text>
        </CardItem>
      </Card>
    </Content>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: null,
    flex: 1,
  },
});

export default PostCard;
