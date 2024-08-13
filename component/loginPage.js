import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import TextInputWithLabel from './textInputWithLabel';
import ButtonWithLoader from './buttonWithLoader';

const LoginPageView =() =>{

    const onLogin = ()=>{
        console.warn('Login button pressed');
    }
    return(
        <View style={styles.container}>
            <Text style={{alignSelf:'center',fontWeight:'bold',color:'black'}}>LOGIN</Text>
            <TextInputWithLabel label="Email" placeholder="Enter Your Email" />
            <TextInputWithLabel label="Password" placeholder="Enter Password" isSecure={true} />

            <ButtonWithLoader textLabel="Sign In" onPress={onLogin} />
        </View>
    )
}

export default LoginPageView;
const styles = StyleSheet.create({
    container :{
        flex :1,
        padding : 24,
        backgroundColor :'white',
        marginTop : 50
    }
})
