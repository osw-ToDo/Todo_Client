import React from "react";
import { TouchableOpacity } from "react-native";
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Icon = styled.Image //{ css 문법인것 같아요.! react native 관련 스타일 적용법으로 바꿔주셔야할것 같습니다.
    // tint-color: ({ theme }) => theme.text,
    // width: 30px;
    // height: 30px;
    // margin: 10px;
//};

const IconButton = ({ type, onPressOut }) => {
    return (
        <TouchableOpacity onPressOut={onPressOut}>
            <Icon source = {type} />
        </TouchableOpacity>
    );
};

IconButton.PropTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
};

export default IconButton;