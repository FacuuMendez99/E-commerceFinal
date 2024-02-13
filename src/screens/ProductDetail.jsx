import {View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions} from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shopSlice'
import Carousel from '../components/Carrousel'
import { addItem } from '../features/cartSlice'

const ProductDetailScreen = ({route}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isPortrait, setIsPortrait] = useState(true)

    const { height, width } = useWindowDimensions()

    const productId = route.params

    const productSelected = useSelector(state=>state.shopReducer.productSelected)

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
      <View style={styles.container}>
      {
      isLoading
      ?
      <ActivityIndicator size="large" color="#000" />
      :
      <>
          <Carousel /> 
          <View style={styles.detailContainer}>
              <Text style={styles.title}>{productSelected.title}</Text>
              <Text style={styles.description}>{productSelected.description}</Text>
              <Text style={styles.price}>$ {productSelected.price}</Text>
              <TouchableOpacity style={styles.buyButton} onPress={onAddToCart}>
                <Text style={styles.buyText}>Agregar al carrito</Text>
              </TouchableOpacity>
          </View>
          </>
      }
      </View>
  )
}

export default ProductDetailScreen 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: "#000",
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: "#000",
    textAlign: 'justify',
    marginBottom: 10,
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: "#000",
    marginBottom: 10,
  },
  buyButton: {
    marginTop: 10,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.success,
    borderRadius: 10,
  },
  buyText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  }
})  