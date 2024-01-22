import {View, Text, StyleSheet, FlatList} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'
import {useGetCategoriesQuery} from "../services/shopService"

const CategoriesScreen = ({navigation}) => {

    // const categories = useSelector(state=>state.shopReducer.categories)
    const {data, isLoading, error} = useGetCategoriesQuery()

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation} />
    )

    return(
        <>
        <FlatList style={styles.categories}
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})