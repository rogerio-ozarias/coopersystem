import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './style';

const Header: React.FC = (props) => {    

    const { getState } = useNavigation();        

    return(
        <Container>            
            <Title>                
                Resgate
            </Title>
        </Container>
    );
}

export default Header;
