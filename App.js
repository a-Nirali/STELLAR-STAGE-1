import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import DailyScreen from './screens/DailyPic';
import SpaceCraftScreen  from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';

const Stack=createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="DailyPic" component={DailyScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App ;


