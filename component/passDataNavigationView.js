// We can put button on right and left of the navigation bar. Other than button we can also add the entire component on left and right side.
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './login';
import Home from './home';
import { Button } from 'react-native';
import RightBtnView from './rightBtnView';

// If we want to put style in all navigation do styling in Stack.navigator with screenoptions tag else in Stack.screen
const PassDataNavigationView = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                    headerStyle : {
                        backgroundColor : 'blue'
                    },
                    headerTintColor : 'white',
                    headerTitleStyle : {
                        fontSize : 15
                    }
                }}
                >
                <Stack.Screen name='Login' component={Login} options={{
                     headerTitle : () => <Button title='Left Btn' onPress={()=> console.warn("Left Btn Pressed")}/>,
                     headerRight : () => <RightBtnView />,
                }}/>
                <Stack.Screen name='Home' component={Home}
                options={{
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



export default PassDataNavigationView;