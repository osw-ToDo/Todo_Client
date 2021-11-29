import React from 'react';
import { Pressable, StyleSheet, View, Image, ColorPropType} from 'react-native';
import { theme } from "../theme";
import PropTypes from 'prop-types';
import { images } from '../images';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const IconButton= ({type, onPressOut}) => {

const IconButton = ({type, onPressOut})=> {
    
    return (
        <Pressable onPressOut={onPressOut}>
            <Image source={type} style={iconStyle.icon}/>
        </Pressable>
    );
};

export const PicButton= ({type, onPressOut}) => {

  return (
    <Pressable onPressOut = {onPressOut}>
        <Image source = {type} style = {iconStyle.pic}/>
    </Pressable>
   
  );
};

const iconStyle = StyleSheet.create({
    icon: {
        tintColor: theme.text,
        width: 30,
        height: 30,
        margin: 10,
        resizeMode: 'contain', 
    },
    pic: {
      tintColor: theme.text,
      width: 50,
      height: 50,
      margin: 5,
      resizeMode: 'contain', 
  },
});

IconButton.propTypes={
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
};



