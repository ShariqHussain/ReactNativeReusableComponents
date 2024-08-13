import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, Platform } from 'react-native';

const PlatformView = () => {

    
   
    return (
        <View style = {styles.mainBox}>
          
        <Text>Platform:{Platform.OS}</Text>
        <View style = {styles.innerView}></View>
        </View>

    );

};




const styles = StyleSheet.create({
    mainBox : {
        flex :1,
      
    },
    innerView : {
        backgroundColor : Platform.OS == 'ios' ? 'red' : 'green',
        height : 100,
        width : 100

    }
})


export default PlatformView;