import React, {useState, forwardRef} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';


const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;
const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme, isFocused }) => (isFocused ? theme.text : theme.label)};
`;

const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.inputPlaceholder,
}))`
  background-color: ${({ theme, editable }) =>
    editable ? theme.background : theme.inputDisabledBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px 10px;
  font-size: 16px;
  border: 1px solid
    ${({ theme, isFocused }) => (isFocused ? theme.text : theme.inputBorder)};
  border-radius: 4px;
`;


const Input = forwardRef (
    ({
    label,
    onBlur,
    placeholder,
    isPassword,
    returnKeyType,
    maxLength,
    value, onChangeText, onSubmitEditing
    },
    ref) => {
        const [isFocused, setIsFocused] = useState(false);
    return(
        <Container>
            <Label isFocused={isFocused}>{label}</Label>
            <StyledTextInput
                red={ref}
                isFocused={isFocused}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                onFocus={()=>setIsFocused(false)}
                onBlur={()=>{setIsFocused(false);
                            onBlur();}}
                placeholder={placeholder}
                secureTextEntry={isPassword}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="none" // iOS only
                underlineColorAndroid="transparent" // Android only
                />
            {/*<TextInput style={inputStyle.textInput}
                    placeholder="Enter your To-do!"
                    placeholderTextColor={theme.text}
                    maxLength={50}
                    keyboardAppearance="light"
                    value={value} onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}>
                </TextInput>*/}
        </Container>
        );
    }
);

Input.defaultProps={
    onBlur:()=>{},
};

Input.propTypes={
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    returnKeyType: PropTypes.oneOf(['done', 'next']),
    maxLength: PropTypes.number,
};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 17,
        width: 300,
        height: 50,
        marginTop: 10,
        marginLeft: 20,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:10,
        backgroundColor: theme.itemBackground,
        color: theme.text,

    },
});

export default Input;