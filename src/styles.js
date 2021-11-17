import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const viewStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      width: '100%',
      alignItems: 'flex-start',
      justifyContent:'flex-start',
    },
    header: {
        width:'100%',
        height:'5%',
       // backgroundColor: '#ff9a9a',
      },
      content: {
        flex: 1,
        height: 640,
        paddingLeft:10,
        paddingRight:30,
        paddingBottom:30,
        justifyContent: 'center',
        backgroundColor: '#d6ca1a',
      },
      footer: {
        width:'100%',
        height:'5%',
        alignItems: 'flex-end',
        //backgroundColor: '#1ad657',
      }
  });
  
export const textStyles = StyleSheet.create({
    title: {
      fontSize: 40,
      fontWeight: '600',
      color: theme.main,
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 10,
      backgroundColor : '#1ad657'
    },
  });

  export const barStyle = StyleSheet.create({
    statusbar: {
      backgroundColor: theme.background,
    },
  });

  export const iconStyles = StyleSheet.create({
    done: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom : 5,
    marginRight : 5
    },
  });