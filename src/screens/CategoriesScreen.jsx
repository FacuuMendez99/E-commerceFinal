import {StyleSheet, FlatList, Text, ActivityIndicator} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import {useGetCategoriesQuery} from "../services/shopService"
import {useGetProductsQuery} from "../services/shopService"


const CategoriesScreen = ({navigation}) => {

    const {data: categories, isLoading: isLoadingCategories, error: categoriesError} = useGetCategoriesQuery()
    const {data: products, isLoading: isLoadingProducts, error: productsError} = useGetProductsQuery()

    const renderCategoryItem = ({item: category}) => {
        const firstProduct = products.find(product => product.category === category);
        return <CategoryItem category={category} product={firstProduct} navigation={navigation} />
    }

    if (isLoadingCategories || isLoadingProducts) {
        return <ActivityIndicator/>;
    }

    if (categoriesError || productsError) {
        return <Text>Error!</Text>;
    }

    
    return(
        <>
        <FlatList style={styles.categories}
            data={categories}
            numColumns={2}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
})