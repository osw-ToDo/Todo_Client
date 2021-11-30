import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  render (){
    return (
      <View style={styles.container}>

        <View style={styles.topView}>
          <Text style={styles.titleText}> Todat's List </Text>
          <View style={styles.settingView}>
            <TouchableOpacity>
              {/* <Image source={require('assets/main_weekly/settingButton.png')}/> */}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainView}>
          {/* <Image source={require('assets/main_weekly/trafficSign_main.png')}/>
          <Image source={require('assets/main_weekly/trafficLignt1.png')}/> */}
        </View>

        <View style={styles.listView}>
          <TouchableOpacity style={styles.checkButton}>
              {/* <Image source={require('assets/main_weekly/checkButton.png')}/> */}
              </TouchableOpacity>
             
          <Text>list</Text>
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.menuButton}>
            {/* <Image source={require('../assets/main_weekly/todaySignButton.png')}/>
            <Image source={require('../assets/main_weekly/addButton.png')}/> */}
          </TouchableOpacity>
        </View>

      </View>
    );
  };
};

const styles = StyleSheet.create ({
    container: {
      flex: 1,
    },
    topView: {
      flex: 1,
      backgroundColor: '#e5e5e5',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginRight: '1%',
    },
    mainView: {
      flex: 6,
      backgroundColor: '#e5e5e5',
      flexDirection: 'row',
    },
    listView: {
      flex: 6,
      backgroundColor: '#e5e5e5',
    },
    titleText: {
      fontSize: 15,
      justifyContent: 'center',
      color: 'black',
    }
});



