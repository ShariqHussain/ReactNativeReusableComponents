import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShopingCartView from './shoppingCartView'
import UserList from './userList'

const Stack = createNativeStackNavigator()

const ProductWrapper = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={ShopingCartView} />
                <Stack.Screen name='UserList' component={UserList} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}



export default ProductWrapper;