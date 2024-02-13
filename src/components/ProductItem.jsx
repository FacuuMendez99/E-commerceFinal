import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { setProductIdSelected, setProductSelected } from '../features/shopSlice'

const ProductItem = ({product, navigation}) => {

    const dispatch = useDispatch()
return (
    <TouchableOpacity onPress={()=>{
        dispatch(setProductIdSelected(product.id))
        dispatch(setProductSelected(product.id))
        navigation.navigate("Detalle", product.id)
    }
        } style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image
            style={styles.productImage}
            resizeMode='cover'
            source={{uri: product.thumbnail }}
        />
    </TouchableOpacity>
)}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        borderBottomWidth:0.5,
        paddingVertical:16,
        marginHorizontal:10
    },
    productTitle:{
        textTransform:"capitalize",
        fontSize:15,
        fontFamily: 'Poppins-Regular',
        width:"75%"
    },
    productImage:{
        width:60,
        height:60
    }

})