import { Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import Card from './Card'
import { useDispatch } from "react-redux"
import { setCategorySelected } from "../features/shopSlice"

const CategoryItem = ({ category, product,navigation }) => {

    const dispatch = useDispatch()

    return (
        <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate("Productos",{category})
            dispatch(setCategorySelected(category))
        }}>
            <Card style={styles.cardContainer}>
                {product && product.images && product.images.length > 0 && <Image source={{uri: product.images[0]}} style={styles.image} />}
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    container:{
        flex:1,
        width: 200,
        height: 200,
        margin:3
    },
    cardContainer:{
        backgroundColor:"#fff",
        padding:10,
        margin:10
    },
    text:{
        position:"absolute",
        textTransform:"capitalize",
        fontFamily:"Poppins-Regular",
        bottom:0,
        backgroundColor:"white",
        padding:6
    }
})