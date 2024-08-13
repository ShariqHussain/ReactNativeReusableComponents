import { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


// Reac Native doesn;t have there own radio buttons we have to create custom button with touchable opacity.
const RadioButton = () => {

  const [selectedRadio, setSelectedRadio] = useState(1)
  return (
    <View style = {styles.mainBox} >
          <TouchableOpacity onPress={() => setSelectedRadio(1)}>
            <View style = {styles.radioView}>
              <View style = {styles.radioButton1}>
                {
                  selectedRadio == 1 ? <View style = {styles.selectedView}></View> : null
                }
              </View>
              <Text>Radio1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedRadio(2)}>
            <View style = {styles.radioView}>
              <View style = {styles.radioButton1}>
              {
                  selectedRadio == 2 ? <View style = {styles.selectedView}></View> : null
                }
              </View>
              <Text>Radio2</Text>
            </View>
          </TouchableOpacity>
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

export default RadioButton;