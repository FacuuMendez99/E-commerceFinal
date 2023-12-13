import { StyleSheet, Text, View } from "react-native"

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ddd",
        height:100,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:24,
        color:"#333",
        fontFamily:"Poppins-Regular"
    }
})