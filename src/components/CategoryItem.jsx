import { Text, StyleSheet, TouchableOpacity } from "react-native"
import Card from './Card'

const CategoryItem = ({ category, navigation }) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("Productos",{category})}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cardContainer:{
        backgroundColor:"#fff",
        padding:10,
        margin:10
    },
    text:{
        textTransform:"capitalize"
    }
})