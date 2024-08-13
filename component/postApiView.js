import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

// To Start the server goto into db.json folder and type this command in terminal ::   json-server --host 192.168.1.4 db.json --port 3000

const PostApiView = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const callPostApi = async () => {

        !name ? setNameError(true) : setNameError(false)
        !age ? setAgeError(true) : setAgeError(false)
        !email ? setEmailError(true) : setEmailError(false)

        if (!name || !age || !email) {
            return false;
        }

        console.warn(age)
        const data = {
            name: "Ibrahim",
            age: 4,
            email: "abc@gmail.com"
        }
        const url = 'http://192.168.1.8:3000/users'
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age, email })
        })

        // let result = await fetch(url)
        result = await result.json()
        console.warn(result)

    }
    return (
        <View style={styles.mainContainer}>
            <Text>Post Api Implementation</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.inputView}
                    placeholder='Enter your name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                {
                    nameError ? <Text>Please Enter name</Text> : null
                }
                <TextInput style={styles.inputView} placeholder='Enter your age' value={age} onChangeText={(text) => setAge(text)} />
                {
                    ageError ? <Text>Please Enter Age</Text> : null
                }
                <TextInput style={styles.inputView} placeholder='Enter your Email' value={email} onChangeText={(text) => setEmail(text)} />
                {
                    emailError ? <Text>Please Enter Email</Text> : null
                }
            </View>
            <Button title='Post Data' onPress={callPostApi} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 2
    },
    textInputContainer: {
        flex: 1,
        justifyContent: 'center',

    },
    inputView: {
        borderColor: 'black',
        borderWidth: 2,
        margin: 10
    }

})
export default PostApiView;