import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { colors } from '../global/colors';

const Search = ({ onSearchHandlerEvent }) => {

    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState('')

    const onSearchHandler = () => {
        const regEx = /[^\w\s]/
        if(regEx.test(searchInput)){
            setError("Sólo se admiten letras y números")
            setSearchInput("")
        }else{
            setError("")
            onSearchHandlerEvent(searchInput)
        }
    }

    const onResetSearchHandler = () => {
        setSearchInput("")
        onSearchHandlerEvent("")
    }

    return (
        <>
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar...'
                value={searchInput}
                onChange={(e) => {
                    onSearchHandlerEvent(e.nativeEvent.text)}}
                placeholderTextColor={'#c67bff'}
            />
            <TouchableOpacity onPress={onResetSearchHandler}>
                <Entypo name="cross" size={24} color={colors.primaryBack}/>
            </TouchableOpacity>
        </View>
        {
            error
            ?
            <View><Text style={{textAlign:"center",fontFamily:"Poppins-Light",color: colors.error}}>{error}</Text></View>
            :
            null
        }
        </>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 10,
        backgroundColor:colors.primary
    },
    textInput: {
        width: '90%',
        backgroundColor:"white",
        padding:5,
        paddingLeft:15,
        borderRadius:15,
        color:colors.primary,
        backgroundColor:colors.primaryBack
    },

})