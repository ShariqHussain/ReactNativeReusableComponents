import { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


// Reac Native doesn;t have there own radio buttons we have to create custom button with touchable opacity.
const RadioButtonArray = () => {

  const [selectedRadio, setSelectedRadio] = useState(1)
  const skills = [
    {
        id : 1,
        skill : "Java"

    },
    {
        id : 2,
        skill : "Swift"

    },
    {
        id : 3,
        skill : "ReactNative"

    },
    {
        id : 4,
        skill : "Objective C"

    }
  ]
  return (
    <View style = {styles.mainBox} >
         {
          
          skills.map((item,index) =>  <TouchableOpacity 
          key={index}
          onPress={() => setSelectedRadio(item.id)}>
            <View style = {styles.radioView}>
              <View style = {styles.radioButton1}>
                {
                  selectedRadio == item.id ? <View style = {styles.selectedView}></View> : null
                }
              </View>
              <Text style = {styles.radioText}>{item.skill} </Text>
            </View>
          </TouchableOpacity> )
         }
    </View>

  )

  
};

const styles = StyleSheet.create({
  mainBox : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    margin : 10
  },
  radioText : {
    color : 'lightblue'
  },
  radioButton1 : {
    height : 40,
    width: 40,
    borderColor : 'lightblue',
    borderWidth : 2,
    borderRadius :20,
    margin : 10
  },
  selectedView : {
    height : 28,
    width: 28,
    backgroundColor : 'lightblue',
    borderWidth : 0,
    borderRadius :20,
    margin : 4
  },
  radioView : {
    flexDirection : 'row',
    alignItems : 'center'
  }
})

export default RadioButtonArray;