import { createStackNavigator } from '@react-navigation/stack';
import makeSign from './makingSignView';
import showSign from './showingSignView';
import createToDo from './CreateToDo';
import montly  from './Montly';
import Main from "./Main";
import Weekly from "./Weekly";


import * as React from 'react';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard ,Button,BackHandler } from 'react-native';

const Stack = createStackNavigator();

export function goBack({navigation}) {
  if ( navigation.canGoBack() )
  navigation.goBack();
  else
  BackHandler.exitApp();

};

function RootStack() {
  return (

    <Stack.Navigator
      initialRouteName="main"
    >

      <Stack.Screen
        name="main"
        component={MainView}
        options={{ headerShown: false }}
      />
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
        name="creatToDo"
        component={createToDo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="montly"
        component={montly}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="weekly"
        component={WeeklyView}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
   
  );
}

 function WeeklyView() {
  return (
    <View style={styles.container}>
   
      <Weekly />
      <StatusBar style="auto" />
    </View>
  );
}


function MainView() {
  return (
    <View style={styles.container}>
      <Main />
 
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee9e0",
    // margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});



export default RootStack;