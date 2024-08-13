import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, Pressable, StatusBar } from 'react-native';

const StatusBarView = () => {

    const [hide, setHide] = useState(false)
    const [statusColor, setStatusColor ] = useState('dark-content')
   
    return (
        <View style = {styles.mainBox}>
           <StatusBar
           backgroundColor={"green"}
           barStyle={statusColor}
           hidden = {hide}
           />

           <Button  title='Toggle' onPress={()=>setHide(!hide)} />
           <Button  title='UpdateColor' onPress={()=> statusColor == 'light-content' ? setStatusColor('dark-content'): setStatusColor('light-content')} />

           

        </View>

    );

};




const styles = StyleSheet.create({
    mainBox : {
        flex :1,
        justifyContent : 'center'
    }
})


export default StatusBarView;