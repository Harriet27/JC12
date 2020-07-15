import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodo} from '../Redux/Actions/todoActions';
import {FlatList, View} from 'react-native';
import PostCard from '../Components/PostCard';
import {HeaderWoIcon} from '../Components';

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const dataList = useSelector(state => state.todo.dataList);
  const loading = useSelector(state => state.todo.loading);
  // console.log(dataList);
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <HeaderWoIcon title="Feed" />}
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

export default Feed;
