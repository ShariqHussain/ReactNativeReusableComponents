import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

const ButtonWithLoader = ({textLabel,onPress}) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
        <Text style={styles.textstyle}>{textLabel}</Text>
        </TouchableOpacity>
  )
}

export default ButtonWithLoader

const styles = StyleSheet.create({

    btnStyle :{
        height :50,
        backgroundColor : 'blue',
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    textstyle : {
        fontSize : 24,
        color : 'white',
    }
})