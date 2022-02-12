import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';
import Header from '../pages/components/Header';

const Route = (props) => {    
  
  return (
    <NavigationContainer>
      <Header />
      <Stack />
    </NavigationContainer>
  );
};

export default Route;