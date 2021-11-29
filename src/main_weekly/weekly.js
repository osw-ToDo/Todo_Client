import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Table from './table';

export default class App extends React.Component {
    render (){
      return (
        <View style={styles.container}>
  
          <View style={styles.topView}>
            <Text style={styles.titleText}> 11 </Text>
          </View>

        //table
          <View style={styles.mainView}> 
            <Table />
          </View>
  
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.menuButton}>
              <Image source={require('assets/main_weekly/addButton.png')}/>
            </TouchableOpacity>
          </View>
  
        </View>
      );
    }
  }

  const styles = StyleSheet.create ({
    container: {
      flex: 1,
    },
    topView: {
      flex: 1,
      backgroundColor: '#e5e5e5',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '1%',
    },
    mainView: {
      flex: 6,
      backgroundColor: '#e5e5e5',
      flexDirection: 'row',
    },
    bottomView: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    }
    titleText: {
      fontSize: 15,
      justifyContent: 'center',
      color: black,
    }
});