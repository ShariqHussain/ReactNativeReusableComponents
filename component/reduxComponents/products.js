import React, { useEffect, useState } from 'react'
import { Text, View, Image, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removefromcart } from '../redux/action';

const ProductView = (props) => {

    const [isAdded, setIsAdded] = useState(false)
    const item = props.item;
    const cartItems = useSelector((state) => state.reducer)
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        // console.warn(item);
        dispatch(addTocart(item))

    }
    const handleRemoveFromCart = (item) => {
        // console.warn(item);
        dispatch(removefromcart(item.name))

    }

    useEffect(() => {

        let result = cartItems.filter(element => {
            return element.name == item.name
        })

        result.length ? setIsAdded(true) : setIsAdded(false)


    }, [cartItems])



    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'black', borderBottomWidth: 2, padding: 10 }}>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
            {
                isAdded ? <Button title='Remove From Cart' onPress={() => handleRemoveFromCart(item)} /> : <Button title='Add To Cart' onPress={() => handleAddToCart(item)} />
            }

        </View>
    )
}

export default ProductView;