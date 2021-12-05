import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 20px;
`;

const Signup = () => {
    return (
        <Container>
            <Text style = {{fontSize :30}}>Login Screen</Text>
        </Container>
    );
};

export default Signup;