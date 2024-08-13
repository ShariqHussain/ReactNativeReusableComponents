import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from './login';
import Home from './home';


// npm start --clean-cache   Run this is for cleaning the cache
const Tab = createBottomTabNavigator();
const BottomTabNavigationView = () => {

    

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Login" component={Login} />
                <Tab.Screen name='Home' component={Home}/>
            </Tab.Navigator>
        </NavigationContainer>

    );

};

export default BottomTabNavigationView;