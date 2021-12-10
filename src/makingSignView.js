import React from 'react';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard ,Button,BackHandler,Alert } from 'react-native';
import { viewStyles, textStyles,  iconStyles } from './styles';
import EventInput from './EventInput';
import { TouchableWithoutFeedback } from 'react-native';
import {Input} from './components/signInput';
import {images} from './images';
// import {IconButton} from './components/IconButton';
import TrafficSign from './components/J_trafficSign';
import J_List from './components/J_List';

import { IconButton} from 'react-native-paper';
import { goBack } from './J_index';

const makeSign= ({ navigation, route }) => {

 
 
  return (


        <SafeAreaView style={viewStyles.container}>
          <StatusBar barStyle="light-content" style={textStyles.statusBar} />
          <View style={viewStyles.header}>
            <IconButton icon={images.back} onPress={() => {back({navigation});}}/>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={viewStyles.content}>

            <Text style={textStyles.title}>Today's Sign</Text>
            <Input />
            <TrafficSign doneListNum={5} totalListNum={115} />
            <View style={viewStyles.test}><J_List /></View>
          </View>
          </TouchableWithoutFeedback>
          
          <View style={viewStyles.footer}>
            <View>
          
              <IconButton icon={images.done} onPress={() =>{confirm({navigation});}}/>
            </View>
          </View>

        </SafeAreaView>
     

    
  );
}

function back({navigation}){

  Alert.alert(                    // 말그대로 Alert를 띄운다
    "Quit editing?",                    // 첫번째 text: 타이틀 제목
    "If you leave before saving, your changes will be lost.",    
    [                              // 버튼 배열
      {
        text: "cancel",                              // 버튼 제목
        onPress: () => console.log("cancel"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
        style: "cancel"
      },
      { text: "confirm", onPress: () => goBack({navigation}) }, //버튼 제목

    ],
    { cancelable: false }
  )

  

}

function confirm({navigation}){

  Alert.alert(                    // 말그대로 Alert를 띄운다

    "saved it successfully",
    "",  
   
    [
      { text: "OK", onPress:() => navigation.navigate('showSign')}, //버튼 제목
      
    ],
    { cancelable: false }
    
  )

  

}








export default makeSign;

