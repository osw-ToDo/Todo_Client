
import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput} from 'react-native';
import { theme } from "../theme";

const Input= () => {

  return (
    <TextInput style = { inputStyles.textInput}> 오소플 화이팅~ </TextInput>
   
  );
};


export const inputStyles = StyleSheet.create({
    textInput: {
      fontSize: 25,
      width: Dimensions.get('window').width -40,
      height: 365, 
      alignContent: 'center',
      textAlign: 'left',
      textAlignVertical: 'top',
      marginTop: 10,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft:15,
      paddingTop: 10, 
      borderRadius: 2,
      backgroundColor:theme.itmeBackground,
      color: theme.text, 
      borderWidth:3,
      borderColor: theme.text
    
    },
  });


export default Input;

