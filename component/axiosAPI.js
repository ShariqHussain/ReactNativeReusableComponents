import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'


export default function AxiosAPIView() {

    const [data, setData] = useState()
    const baseUrl = "https://jsonplaceholder.typicode.com"
    const getAPIData = () => {
        axios({
            method: 'GET',
            url: `${baseUrl}/posts`
        })
            .then((res) => setData(res.data))
            .catch((err) => console.warn(err))

    }

    const postData = () => {
        axios({
            method: 'POST',
            url: `${baseUrl}/posts`,
            body: JSON.stringify({
                title: 'New Title',
                id: 103,
                body: 'New Body'
            })
        })
            .then((res) => setData(res))
            .catch(() => console.warn(err))
    }

    return (
        <View style={styles.container}>
            <Text>AxiosAPIView</Text>
            <View style={{ paddingBottom: 10 }}>
                <Button title='Fetch' onPress={getAPIData} />
            </View>

            <View style={{ paddingBottom: 10 }}>
                <Button title='Post Data' onPress={postData} />
            </View>

{
 Array.isArray(data) ? <FlatList
 data= {data}
 ListEmptyComponent={() => <Text style={{ fontSize: 25, textAlign: 'center' }}>No Data Found</Text>}
 renderItem={({ item }) => <View>
     <Text>{item.id}</Text>
 </View>
 }

/> : (data != null ? <Text>{data.status}</Text> : <Text>No Data</Text> )


}
           


            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    }
})