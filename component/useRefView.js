import React, { useRef } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const USERefView = () => {


    const input = useRef()

    const updateRef = () =>{

        input.current.focus();
        input.current.setNativeProps({
            fontSize : 24,
            color : 'red'
        })
    }
    return(
        <View style = {styles.container}>
            <Text>Use Ref Hook implementation. It is use for changing the ref of the any component and can also change style of a component</Text>
            <TextInput ref={input} style ={styles.input} placeholder='Enter Username' />
            <TextInput style ={styles.input}  placeholder='Enter password' />
            <Button style = {{padding : 10}} title='Update Ref' onPress={updateRef}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        padding : 16
    },
    input : {
        fontSize : 30,
        borderColor : 'skyblue',
        borderWidth : 2,
        height : 50,
        margin : 10,
        padding : 8
    }
})

export default USERefView;