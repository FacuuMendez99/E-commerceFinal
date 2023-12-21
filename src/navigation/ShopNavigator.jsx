import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetail from '../screens/ProductDetail'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return(
            <Stack.Navigator
                initialRouteName="Categorías"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }
            
            >
                <Stack.Screen 
                    name="Categorías"
                    component={CategoriesScreen}
                />
                <Stack.Screen 
                    name="Productos"
                    component={ProductsByCategory}
                    options={{ title: 'Productos'}}
                />
                <Stack.Screen 
                    name="Detalle"
                    component={ProductDetail}
                />
            </Stack.Navigator>
    )
}


export default ShopNavigator
