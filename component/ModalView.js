import React, { useEffect, useState } from 'react'
import { Text, View, Button, ActivityIndicator, StyleSheet, Modal } from 'react-native';

const ModalView = () => {
    const [show, setShow] = useState(false)

    const modalButtonPressed = () => {
        setShow(true)
    }

    return (
        <View style={styles.mainBox}>

            <Modal
                transparent={true}
                visible={show}
                animationType='slide'
            >
                <View style = {styles.centeredView}>
                    <View style = {styles.modalView}>
                        <Text style = {styles.modalText}>Step by Step code by Shariq</Text>
                        <Button title='Close' onPress={()=>setShow(false)} />
                    </View>
                </View>

            </Modal>

            <Button title='Open Modal' onPress={modalButtonPressed} />
        </View>

    );

};




const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    centeredView : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        margin : 20
    },
    modalText : {
        fontSize : 30,
        marginBottom : 20,
    },
    modalView : {
           backgroundColor : 'white',
           paddingVertical : 20,
           paddingHorizontal : 10,
           borderRadius : 20,
           shadowColor : 'black',
           elevation : 5
           
    }
})


export default ModalView;