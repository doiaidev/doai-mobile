import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

//Páginas
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Locations from './pages/Locations';
import Sobre from './pages/Sobre';

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='Locations' component={Locations} headerMode='screen' />
                <Stack.Screen name='Sobre' component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}