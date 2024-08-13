import { warn } from 'console'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useSelector} from 'react-redux'
const HeaderView = () =>{

    const cartData = useSelector((state)=>state.reducer)

    const [cartItems, setCartItems] = useState([])
    //console.warn(cartData)
    useEffect(()=>{
        setCartItems(cartData.length)
    },[cartData])
    return(
        <View style={styles.container}>
                <View style ={{backgroundColor:'red',borderRadius:20,width:30,height:30,alignSelf:'flex-end',marginRight:5,marginTop:5}}>
                    <Text style={{color:'white', textAlign:'center',fontSize:15,paddingTop:5}}>{cartItems}</Text>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor : 'orange',
        height : 40
    }
})
export default HeaderView;