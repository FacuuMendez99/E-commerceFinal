import {View, Text, StyleSheet, FlatList} from 'react-native'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const CategoriesScreen = ({navigation}) => {

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation} />
    )

    return(
        <>
        <FlatList style={styles.categories}
            data={categories_data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categories:{
        marginBottom:90,
    }
})