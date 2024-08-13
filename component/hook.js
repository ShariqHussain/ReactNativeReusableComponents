import React, {useEffect, useState} from 'react';
import { Button, Text, View } from 'react-native';
import User from './user';

const Hook = () => {

   const [count, setCount] = useState(0)
   const [data, setData] = useState(0)
  useEffect(() => {
    //console.warn("Hello World",count);
  },[count])

  useEffect(() => {
    //console.warn("Call Some Api here");
  },[data])
  return (
    <View>
      <Text style={{ fontSize: 20 }}> {data}Life Cycle Methods using Hook {count}</Text>
      <Button  title='Update Count' onPress={() =>  setCount(count + 10)}/>
      <Button  title='Update Data' onPress={() => setData(data + 20)}/>
      <User info = {{count,data}}/>
    </View>

  );

};
export default Hook;