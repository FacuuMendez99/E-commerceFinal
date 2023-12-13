import { StyleSheet, Text, View } from "react-native"

const ProductDetail = ({title}) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container:{

    }
})