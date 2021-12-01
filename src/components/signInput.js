
import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput} from 'react-native';
import { theme } from "../theme";

const Input= () => {
  let time = new Date()
  let todayDate = time.getDate()
  let todayDay = time.getDay()

  const week= ['SUN','MON','TUE','WED','THU','FRI','SAT']
  let dayOfWeek = week[todayDay]
//<TextInput value ="a" editable = {false} style={inputStyles.dayText} multiline={true}></TextInput>
  return (
    <>
      <TextInput style={inputStyles.textInput} multiline={true}>
      
      <Text  style ={inputStyles.underline}>{todayDate}</Text>      
      <Text  style = {inputStyles.dayOfWeek}>{"\n"}{dayOfWeek}{"\n"}</Text>
      </TextInput>
     
      </>
   
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
      paddingLeft:15,
      paddingRight:15,
      paddingTop: 10, 
      borderRadius: 2,
      backgroundColor:theme.itmeBackground,
      color: theme.text, 
      borderWidth:3,
      borderColor: theme.text
    
    },
    underline: { textDecorationLine: 'underline',
    
    borderBottomWidth : 3,
    borderBottomColor : 'black',
    alignContent: 'center',
    textAlign: 'center',
    },
    dayOfWeek: {fontSize : 15},
    dayText: {

    }
  });


export default Input;

