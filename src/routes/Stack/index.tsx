import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Investimento from '../../pages/Investimento';
import Resgate from '../../pages/Resgate';
import Sucesso from '../../pages/Sucesso';

export default () => {
  
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator initialRouteName='Investimento'>
        <Screen options={{ headerShown:false }} name='Investimento' component={ Investimento }></Screen>
        <Screen options={{ headerShown:false }} name='Resgate' component={ Resgate }></Screen>      
        <Screen options={{ headerShown:false }} name='Sucesso' component={ Sucesso }></Screen>        
    </Navigator>
  );
};
