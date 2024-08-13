import { StyleSheet, Text, TextInput, View } from "react-native"

const TextInputWithLabel = ({
    label,
    value,
    placeholder,
    isSecure,
    onChangeText,
    props,
    fontSize,
}) => {
    return (
        <View style>
            <Text style={{fontSize:24,color:'black'}}>{label}</Text>
            <TextInput 
            placeholder={placeholder}
            value={value}
            isSecure={isSecure}
            onChangeText={onChangeText}
            style = {styles.inputStyle}
            placeholderTextColor='gray'
            secureTextEntry = {isSecure}
            {...props}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle : {
       height : 48,
       borderWidth :1,
       borderColor : 'black',
       marginBottom : 20
    }
})

export default TextInputWithLabel;