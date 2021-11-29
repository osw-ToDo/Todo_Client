import { StyleSheet } from 'react-native';
import {theme} from './theme';

export const viewStyles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    card:{
        backgroundColor: '#fff',
        flex:1,
        borderRadius:10,
        margin:20,
        width:340,
    },
    box: {
        marginLeft:290,
        flexDirection: 'row',
    },
    box2:{
        marginLeft:240,
        flexDirection: 'row',
    }
    
});

export const textStyles = StyleSheet.create({
    title: {
        fontSize:30,
        fontWeight: '600',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 0,
    },
    
});

export const barStyles = StyleSheet.create({
    statusbar: {
        backgroundColor: theme.background,
    },
});