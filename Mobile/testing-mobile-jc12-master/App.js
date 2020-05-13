import React from 'react';
// import Stack from './Navigation/Stack';
import {NavigationContainer} from '@react-navigation/native';
// import Drawer from './Navigation/Drawer';
import TabNavigation from './Navigation/TabNavigation';
// import Todo from './Screens/Todo';
// import Sandbox from './Screens/Sandbox';
// import Latihan from './Screens/Latihan';

const App = () => {
  // return <Latihan />;
  return (
    <NavigationContainer>
      {/* <Stack /> */}
      {/* <Drawer /> */}
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
