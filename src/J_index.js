import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import makeSign from './makingSignView';
import showSign from './showingSignView';
import * as React from 'react';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard ,Button } from 'react-native';

const Stack = createStackNavigator();

function RootStack() {
  return (

    <Stack.Navigator
      initialRouteName="makeSign"
    >
      <Stack.Screen
        name="makeSign"
        component={makeSign}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="showSign"
        component={showSign}
        options={{ headerShown: false }}
      />
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
   
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
export default RootStack;