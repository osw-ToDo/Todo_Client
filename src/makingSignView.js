import React from 'react';
import { StatusBar,SafeAreaView, Text, View } from 'react-native';
import { viewStyles, textStyles,  iconStyles } from './styles';
import EventInput from './EventInput';
import Input from './components/signInput';
import {images} from './images';
import IconButton from './components/IconButton';

const App= () => {

  return (
    <SafeAreaView style={viewStyles.container}>
      <StatusBar barStyle="light-content" style={textStyles.statusBar}/>
      <View style = {viewStyles.header}>
       <IconButton  type = {images.back}/>  
      </View>

      <View style = {viewStyles.content}> 
      <Text style={textStyles.title}>Today's Sign</Text>
      <Input/>
      </View>
 
     <View style = {viewStyles.footer}> 
     <View style = {iconStyles.done}>
        <IconButton  type = {images.done}/>
     </View> 
     </View> 
      
      
    </SafeAreaView>
  );
}

export default App;

