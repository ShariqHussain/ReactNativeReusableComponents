import React, { useEffect, useState } from 'react'
import { Button, RootTagContext, StyleSheet, Text, TextInput, View } from 'react-native'

// To Start the server goto into db.json folder and type this command in terminal ::   json-server --host 192.168.1.4 db.json --port 3000

const UpdateView = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        callGetApi();
    }, [])
    const callGetApi = async () => {
        const url = 'http://192.168.1.8:3000/users'
        let result = await fetch(url)
        result = await result.json()

        if (result) {
            setData(result)
        }

    }
    return (
        <View style={styles.mainContainer}>

            <View style={styles.dataWrapper}>
                <Text style = {{flex : 1}}>Name</Text>
                <Text style = {{flex : 1}}>Age</Text>
                <Text style = {{flex : 1.5}}>Operations</Text>
            </View>
            {
                data.length ? data.map((item) => <View style={styles.dataWrapper}>
                    <Text>{item.name}</Text>
                    <Text>{item.age}</Text>
                    <View style={styles.buttonView}>
                        <Button style={{ padding: 5 }} title='Delete' />
                        <Button title='Update' />
                    </View>

                </View>)
                    :
                    null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    dataWrapper: {
        backgroundColor: 'yellow',
        padding: 8,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    buttonView:
    {
        flexDirection: 'row'
    }


})
export default UpdateView;