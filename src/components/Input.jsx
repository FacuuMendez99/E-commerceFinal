import { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../global/colors'

const Input = ({ placeholder, isSecureEntry = false, error = "", onChange }) => {
    const [input, setInput] = useState()

    const onHandleChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onHandleChangeText}
                secureTextEntry={isSecureEntry}
                value={input}
                placeholder={placeholder}
                placeholderTextColor={'#c67bff'}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:'center',
        width: '70%'
    },
    input:{
        borderWidth:1,
        borderColor:colors.primary,
        borderRadius: 10,
        width: '90%',
        backgroundColor: colors.primaryBack,
        color: colors.primary,
        fontFamily:"Poppins-Regular",
        padding: 8,
    },
    label:{
        fontFamily:'Poppins-Bold',
        color: "#fff",
        paddingLeft:5,
        marginBottom:4,
    },
    error:{
        padding: 10,
        color: "#FFF",
    }
})