import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

const ApiCallView = () => {

    const [data, setData] = useState([])

    const getAPICall = async () => {

        // Added Comment 
        const uri = 'https://jsonplaceholder.typicode.com/posts'
        let result = await fetch(uri)
        result = await result.json()
        setData(result)

    }
    useEffect(() => {
        getAPICall();
    }, [])
    return (
        <ScrollView>
            <Text>AAPI CALL IMPlementation</Text>
            {
                data.length ? data.map((item)=>
                    <View style={{borderBottomWidth : 2, borderBottomColor:'black', padding: 10 }}>
                        <Text style={{fontSize: 20,backgroundColor:'lightgray'}}>Id: {item.id}</Text>
                        <Text style={{fontSize: 20}}>Title: {item.title}</Text>
                        <Text style={{fontSize: 20}}>Body: {item.body}</Text>
                    </View>
                )
                :
                 null

            }
        </ScrollView>
    )
}

export default ApiCallView;