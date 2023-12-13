import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Card from "./Card"

const CategoryItem = ({category, onSelectCategoryEvent}) => {
    return(
        <TouchableOpacity onPress={()=>onSelectCategoryEvent(category)}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text} >{category}</Text>
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