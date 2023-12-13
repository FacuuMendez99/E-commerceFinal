import { FlatList, StyleSheet, Text, View } from "react-native"
import products_data from "../data/products_data.json"
import ProductItem from "../components/ProductItem"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import Search from "../components/Search"

const ProductsByCategory = ({category}) => {

    const [productsByCategory,setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        const productsFiltered = products_data.filter(product=>product.category===category)
        const productsSearched = productsFiltered.filter(
            product=>product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productsSearched)
    },[category,search])

    const renderProductItem = ({item}) => (
        <ProductItem product={item}/>
    )

    const onSearch = (search) => {
        setSearch(search)
    }
    
    return (
        <>
        <Header title="Productos"/>
        <Search onSearchHandlerEvent ={onSearch}/>
        <FlatList
            data={productsByCategory}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
            >
        </FlatList>
            </>
    )
}

export default ProductsByCategory

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})