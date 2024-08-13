import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

const FlatListView = () => {

    const [data, setData] = useState([])

    const getAPICall = async () => {

        const uri = 'https://jsonplaceholder.typicode.com/posts'
        let result = await fetch(uri)
        result = await result.json()
        setData(result)
 
    }
    useEffect(() => {
        getAPICall();
    }, [])
    return (
        <View>
            <Text>AAPI CALL IMPlementation with Flat List</Text>
            {
                data.length ? <FlatList 
                data={data}
                renderItem={({item})=>
                    <View style={{borderBottomWidth : 2, borderBottomColor:'black', padding: 10 }}>
                        <Text style={{fontSize: 20,backgroundColor:'lightgray'}}>Id: {item.id}</Text>
                        <Text style={{fontSize: 20}}>Title: {item.title}</Text>
                        <Text style={{fontSize: 20}}>Body: {item.body}</Text>
                    </View>
                }
                />
                : null
            }
        </View>
    )
}

export default FlatListView;