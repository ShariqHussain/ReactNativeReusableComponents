import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderView from './header'
import ProductView from './products'
import { Script } from 'vm'
const ShopingCartView = ({navigation}) => {

    const productList = [
        {
            name: "Samsung Mobile",
            price: 30000,
            color: "red",
            image: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
        },
        {
            name: "iPhone Mobile",
            price: 130000,
            color: "green",
            image: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
        },
        {
            name: "Xiomi Mobile",
            price: 20000,
            color: "orange",
            image: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
        }
    ]

    return (
        <View style = {styles.container}>
            <Button title='UserList' onPress={()=>navigation.navigate('UserList')}/>
            <HeaderView />
            <ScrollView>
            {
                productList.map((item) => <ProductView item = {item} />)
            }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1

    }
})

export default ShopingCartView;