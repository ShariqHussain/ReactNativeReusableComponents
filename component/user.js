
import React,{useEffect} from 'react'
import {Text, View } from 'react-native';

const User = (props) => {

  useEffect(() => {
    console.warn("It will call when count is updated");
  },[props.info.count])

  useEffect(() => {
    console.warn("This is called when data is updated");
  },[props.info.data])
  return (
    <View>
      <Text style={{ fontSize: 20 }}> Count : {props.info.count} </Text>
      <Text style={{ fontSize: 20 }}> Data : {props.info.data}</Text>
    </View>

  );

};
export default User;