import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {theme} from '../theme';

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "AM" : "PM";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};


export default function Day() {
            const placeholder = "Select the Date";

            const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
            const [text, onChangeText] = useState("");
            
            const showDatePicker = () => {
                setDatePickerVisibility(true);
            };

            const hideDatePicker = () => {
                setDatePickerVisibility(false);
            };

            const handleConfirm = (date) => {
                //console.warn("Seleted Date: ", date.format("yyyy/MM/dd"));
                hideDatePicker();
                onChangeText(date.format("yyyy/MM/dd/E"))
            };

            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={showDatePicker}>
                        <TextInput
                            pointerEvents="none"
                            style={styles.textInput}
                            placeholder={placeholder}
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            editable={false}
                            value={text}
                        />
                        <DateTimePickerModal
                            headerTextIOS={placeholder}
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </TouchableOpacity>
                </View>
        );
    }

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        //backgroundColor: '#868e96',
        marginRight: 0,
        
    },
    textInput: {
        fontSize: 16,
        color: '#9b111e',
        height: 40, 
        width: 170, 
        textAlign:'center',
        //backgroundColor: theme.itemBackground, 
        borderWidth: 1, 
        borderColor:theme.itemBackground,
        borderRadius: 10,
        padding: 10
    }
})
