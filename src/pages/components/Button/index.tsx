import React, { Children } from 'react';
import { Text } from 'react-native';
import { Container, Title } from './style';
 
interface ButonInterface{
    onPress: object,
    title: string
}

const Button:  React.FC<ButonInterface> = ({ onPress, title }) =>{
    return(
        <Container onPress={onPress}>
            <Title>
                { title }
            </Title>
        </Container>
    );
}

export default Button;
