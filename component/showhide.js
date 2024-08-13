import React, {useEffect, useState} from 'react'
import {Text, View, Button } from 'react-native';

const ShowComponent = () => {
    const [show, setShow] = useState(true)
   
  return (
    <View>
      <Button title='Toogle' onPress={() => setShow(!show)}/>
      {
        show ? <NewComponent /> : null
      }
     

    </View>

  );

};


const NewComponent = () => {

   var timer = setInterval(() => {
        console.warn("timer called");
    },5000)
  
    // useEffect(() => {
    //     console.warn("Called on mounting")
    // })

    useEffect(() => {
        return () => {
           // console.warn("Called on unmounting . This can be done with return function");
            clearInterval(timer); //IF  WE DIDN'T CLEAR IT WILL RUN CONTINOUSLY IN BACKGROUND.
        }
    })
  return (
    <View>
      <Text style={{ fontSize: 20, backgroundColor : 'green'}}> My Component</Text>
    </View>

  );

};


export default ShowComponent;