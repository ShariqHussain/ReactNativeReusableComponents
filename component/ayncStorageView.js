import React, { useRef, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'




const AsyncStorageView = () => {
    const [myname,setMyName] = useState(' ')

    //Storing string value
const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('name', value);
    } catch (e) {
        // saving error
    }
};

// Storing object value
const storeObjectData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('name', jsonValue);
    } catch (e) {
        // saving error
    }
};

//Reading String value
const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('name');
        if (value !== null) {
            // value previously stored
            setMyName(value)
            console.warn (value)
        }
    } catch (e) {
        // error reading value
    }
};

//Reading object value
const getObjectData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('name');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

    return (
        <View style={styles.container}>
            <Text>{myname}</Text>
            <View style={{ marginBottom: 10 }}>
                <Button style={{ marginBottom: 10 }} title='Get Data' onPress={getData} />
                <Button style={{ padding: 10 }} title='Save Data' onPress={() => storeData('Shariq Hussain')} />
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default AsyncStorageView;