import React, { useEffect, useState } from 'react'
import { Button, Modal, RootTagContext, StyleSheet, Text, TextInput, View } from 'react-native'

// To Start the server goto into db.json folder and type this command in terminal .. change the ip what you currently have ::   json-server --host 192.168.1.4 db.json --port 3000

const UserUpdateView = () => {

    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(undefined)

    useEffect(() => {
        callGetApi();
    }, [])

    const callDeleteUser = async (id) => {

        const url = 'http://192.168.1.8:3000/users'
        let result = await fetch(`${url}/${id}`, {
            method: 'delete'
        })
        result = await result.json()
        if (result) {
            console.warn('User Deleted');
            callGetApi();
        }
    }

    const callGetApi = async () => {
        const url = 'http://192.168.1.8:3000/users'
        let result = await fetch(url)
        result = await result.json()

        if (result) {
            setData(result)
        }

    }

    const updateUser =(data) => {
        setShowModal(true)
        setSelectedUser(data)
    }
    return (
        <View style={styles.mainContainer}>

            <View style={styles.dataWrapper}>
                <Text style={{ flex: 1 }}>Name</Text>
                <Text style={{ flex: 1 }}>Age</Text>
                <Text style={{ flex: 1.5 }}>Operations</Text>
            </View>
            {
                data.length ? data.map((item) => <View style={styles.dataWrapper}>
                    <Text>{item.name}</Text>
                    <Text>{item.age}</Text>
                    <View style={styles.buttonView}>
                        <Button style={{ padding: 5 }} title='Delete' onPress={() => callDeleteUser(item.id)} />
                        <Button title='Update' onPress={()=>updateUser(item)} />
                    </View> 

                </View>)
                    :
                    null
            }

            <Modal transparent = {true} visible ={showModal} >
                <UserModal setShowModal = {setShowModal} userSelected = {selectedUser} getApiData ={callGetApi} />
            </Modal>
        </View>
    )
}


const  UserModal = (props) =>{
      
    console.warn(props.userSelected)
    const [name, setName] = useState(undefined)
    const [age, setAge] = useState(undefined)
    const [email,setEmail] = useState(undefined)

    useEffect(()=>{

        if(props.userSelected)
        {
            setName(props.userSelected.name);
            setAge(props.userSelected.age.toString());
            setEmail(props.userSelected.email);
        }

    },[props.userSelected])


    const saveUserDataByUpdating = async () =>{

        console.warn(name,age,email)
        const id = props.userSelected.id;
        
        const url = 'http://192.168.1.8:3000/users'
        let result = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers : {"content-type" : "application/json"},
            body : JSON.stringify({name,age,email})
        })
        result = await result.json()
        if (result) {
            console.warn('User Updated');
            props.setShowModal(false)
            props.getApiData();
        }
    } 
    return(<View style={styles.centeredView}>
        <View style={styles.modalView}>
            <TextInput style ={styles.inputView} value={name} onChangeText={(text)=>setName(text)} />
            <TextInput style ={styles.inputView} value={age} onChangeText={(text)=>setAge(text)} />
            <TextInput style ={styles.inputView} value={email}  onChangeText={(text)=>setEmail(text)}/>
            <Button title='Close' onPress={()=> props.setShowModal(false)}/>
            <View style={{marginTop : 10}}><Button title='Save' onPress={saveUserDataByUpdating}/></View>
          
        </View>
    </View>)
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
    },
    centeredView :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
        
    },
    modalView : {
        backgroundColor : 'white',
        padding : 50,
        borderRadius : 10,
        shadowColor : 'black',
        shadowOpacity : 0.5,
        elevation : 5

    },
    inputView : {
        borderWidth :1,
        borderColor : 'green',
        width : 200,
        height : 40,
        padding : 10,
        marginBottom : 15
        
    }


}) 
export default UserUpdateView;