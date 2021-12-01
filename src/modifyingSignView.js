import React from 'react';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard  } from 'react-native';
import { viewStyles, textStyles,  iconStyles } from './styles';
import EventInput from './EventInput';
import { TouchableWithoutFeedback } from 'react-native';
import Input from './components/signInput';
import {images} from './images';
import {IconButton} from './components/IconButton';
import TrafficSign from './components/J_trafficSign';
import J_List from './components/J_List';

const App= () => {

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   
    <SafeAreaView style={viewStyles.container}>
      <StatusBar barStyle="light-content" style={textStyles.statusBar}/>
      <View style = {viewStyles.header}>
      <IconButton  type = {images.back}/>  
      </View>
     
      <View style = {viewStyles.content}> 
      
      <Text style={textStyles.title}>Today's Sign</Text>
      <Input/>
      <TrafficSign doneListNum = {5} totalListNum = {115}/>
      <View style={viewStyles.test}><J_List/></View>
      </View>
 
     <View style = {viewStyles.footer}> 
     <View style = {iconStyles.done}>
      <IconButton  type = {images.done}/>
     </View> 
     </View> 
      
    </SafeAreaView>
    </TouchableWithoutFeedback>

    
  );
}


export default App;

