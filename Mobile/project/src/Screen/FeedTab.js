import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Center from '../Support/Helper/Center';
import {fetchTodo} from '../Redux/Actions/todoActions';
import {ActivityIndicator, FlatList, View} from 'react-native';
import PostCard from '../Component/PostCard';
import FeedHeader from '../Component/FeedHeader';

const FeedTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const dataList = useSelector(state => state.todo.dataList);
  const loading = useSelector(state => state.todo.loading);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <View>
      <FlatList
        ListHeaderComponent={FeedHeader}
        refreshing={loading}
        onRefresh={() => dispatch(fetchTodo())}
        keyExtractor={item => item.id.toString()}
        data={dataList}
        renderItem={({item}) => (
          <PostCard
            imagePath={item.imagePath}
            username={item.username}
            displayPicture={item.displayPicture}
            caption={item.todo}
          />
        )}
      />
    </View>
  );
};

export default FeedTab;
