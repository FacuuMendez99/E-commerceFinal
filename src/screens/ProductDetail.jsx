import {View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView} from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { addItem } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const ProductDetailScreen = ({route}) => {
    const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isPortrait, setIsPortrait] = useState(true)

    const { height, width } = useWindowDimensions()

    const productId = route.params

    useEffect(() => {
        height < width ? setIsPortrait(false) : setIsPortrait(true)
      }, [height])
    

    useEffect(()=>{
        const productFound = products_data.find(product=>product.id===productId)
        setProductSelected(productFound)
        setIsLoading(false)
    }
    ,[productId])

    const dispatch = useDispatch()

    const onAddToCart = () =>{
      dispatch(addItem({...productSelected, quantity: 1}))
    }

    return(
        <>
        {
        isLoading
        ?
        <ActivityIndicator />
        :
        <>
            <ScrollView >
              <Image
                source={{ uri: productSelected.images[0] }}
                resizeMode='cover'
                style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
              />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={onAddToCart}>
                  <Text style={styles.buyText}>Comprar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            </>
        }
        
        </>
    )
}

export default ProductDetailScreen 

const styles = StyleSheet.create({
    imageProduct: {
      minWidth: 300,
      width: '100%',
      height: 400,
  
    },
    imageProductLandscape: {
      width: 200,
      height: 200,
    },
    detailContainer: {
      alignItems: 'center',
    },
    title: {
      fontFamily: 'Poppins-Bold',
      fontSize: 32,
    },
    description: {
      fontFamily: 'Poppins-Regular',
      fontSize: 20,
    },
    price: {
      fontFamily: 'Poppins-Bold',
      fontSize: 32,
      color: colors.secondary
    },
    buyButton: {
      marginTop: 10,
      width: 200,
      padding: 10,
      alignItems: 'center',
      backgroundColor: colors.success,
      borderRadius: 10,
    },
    buyText: {
      color: '#fff'
    },
    buyAlt: {
      marginTop: 10,
      width: 200,
      padding: 10,
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderRadius: 10,
    }
    })