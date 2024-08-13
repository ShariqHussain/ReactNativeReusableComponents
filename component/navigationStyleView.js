import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './login';
import Home from './home';

// If we want to put style in all navigation do styling in Stack.navigator with screenoptions tag else in Stack.screen
const NavigationStyleView = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitle : 'User Login',
                    headerStyle : {
                        backgroundColor : 'blue'
                    },
                    headerTintColor : 'white',
                    headerTitleStyle : {
                        fontSize : 15
                    }
                }}
                >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home}
                options={{
                    headerTitle : 'User Home',
                    headerStyle : {
                        backgroundColor : 'green'
                    },
                    headerTintColor : 'white',
                    headerTitleStyle : {
                        fontSize : 15
                    }
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );

};



export default NavigationStyleView;