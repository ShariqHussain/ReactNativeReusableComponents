
// import { Text, View, Button, StyleSheet } from "react-native";
// import Home from "./home";
// const Login = (props) => {
//     return (
//         <View style = {styles.container}>
//             <Text style={{ fontSize: 30 }}>Login Screen</Text>
//             <Button title='Go To Home Page' onPress={()=>props.navigation.navigate("Home")}/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container : {
//         flex :1,
//         justifyContent : 'center',
//         alignItems : 'center'

//     }

// })
// export default Login;


// Uncomment Above for navButtonView.js

import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import Home from "./home";
import { useState } from "react";
const Login = (props) => {

    // userState destructuring is an Array
    const [name,setName]= useState('')
    const age = 35;

    return (
        <View style = {styles.container}>
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <TextInput 
            placeholder="Enter text here" 
            onChangeText={(text)=>setName(text)}
            />
            <Button title='Go To Home Page' onPress={()=>props.navigation.navigate("Home",{name,age})}/> 

        </View>
    )
}
//  <Button title='Go To Home Page' onPress={()=>props.navigation.navigate("Home",{name,age})}/> 

const styles = StyleSheet.create({
    container : {
        flex :1,
        justifyContent : 'center',
        alignItems : 'center'

    }

})
export default Login;