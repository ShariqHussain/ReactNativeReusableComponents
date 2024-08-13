import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, Pressable } from 'react-native';

const PressableView = () => {
   
    // With Pressable we can add multiple events such as long pres press in and others which we cannot do with Touchable opacity and highlight and with normal button

    return (
        <View style={styles.mainBox}>
            <Pressable
            onPress={()=>console.warn('normal on press')}
            onLongPress={()=>console.warn('Long pressed')}
            onPressIn={()=>console.warn('Press in')}
            onPressOut={()=>console.warn('Press out')}
            >
                <Text style = {styles.pressableButton}>Press Me</Text>
            </Pressable>

        </View>

    );

};




const styles = StyleSheet.create({
    mainBox : {
        flex : 1,
        justifyContent : 'center',
    },
    pressableButton : {
        backgroundColor : 'blue',
        padding : 10,
        margin : 20,
        borderRadius : 20,
        textAlign : 'center',
        color : 'white'
    }
    
})


export default PressableView;