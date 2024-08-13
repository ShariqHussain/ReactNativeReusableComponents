import React, { useEffect, useState } from 'react'
import { Text, View, Button, ActivityIndicator, StyleSheet } from 'react-native';

const ActivityIndictr = () => {
    const [show, setShow] = useState(false)

    const activityButtonPressed = () => {
        show ? setShow(false) : setShow(true)
    }

    return (
        <View style={styles.mainBox}>
            <ActivityIndicator size={50} color={"blue"} animating={!show} />

            <Button
                title={show ? "Show" : "Hide"}
                onPress={activityButtonPressed}
            />

        </View>

    );

};




const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ActivityIndictr;