import { createStackNavigator } from '@react-navigation/stack';
import makeSign from './makingSignView';
import showSign from './showingSignView';

import createToDo from './CreateToDo';
import modifyToDo from "./ModifyToDo";
import toDo from './ToDo';
import category from './Category';

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
        name="weekly"
        component={WeeklyView}
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
        name="montly"
        component={montly}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="creatToDo"
        component={createToDo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="toDo"
        component={toDo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="modifyToDo"
        component={modifyToDo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="category"
        component={category}
        options={{ headerShown: false }}
      />
     
     
     
    </Stack.Navigator>
   
  );
}

 function WeeklyView({navigation}) {
  return (
    <View style={styles.container}>
   
      <Weekly navigation = {navigation}/>
      <StatusBar style="auto" />
    </View>
  );
}

import { IconButton} from 'react-native-paper';
function MainView({navigation}) {
  return (
    <View style={styles.container}>
      <Main navigation = {navigation}/>
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