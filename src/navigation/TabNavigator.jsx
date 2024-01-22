import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { colors } from "../global/colors";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()


const TabNavigator = ()=>{

    return(
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle:styles.tabBar,
                }}
            >
                <Tab.Screen 
                    name="ShopStack" 
                    component={ShopNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.tabButton}>
                                <Entypo name="shop" size={24} color={focused?"#fff":"#ccc"} />
                                <Text style={styles.tabText}>Tienda</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.tabButton}>
                                <AntDesign name="shoppingcart" size={24} color={focused?"#fff":"#ccc"} />
                                <Text style={styles.tabText}>Carrito</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen 
                    name="OrderStack" 
                    component={OrdersNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.tabButton}>
                                <FontAwesome name="reorder" size={24} color={focused?"#fff":"#ccc"} />
                                <Text style={styles.tabText}>Ordenes</Text>
                            </View>
                        )
                    }}
                />
                <Tab.Screen     
                    name="ProfileStack" 
                    component={ProfileNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View style={styles.tabButton}>
                                <FontAwesome name="user-o" size={24} color={focused?"#fff":"#ccc"} />
                                <Text style={styles.tabText}>Perfil</Text>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.primary,
        shadowColor: "#ccc",
        elevation: 1,
        height: 70,
    },
    tabButton:{
        alignItems:"center",
        justifyContent:"center",
        top:5,

    },
    tabText:{
        color:"#ebd2ff",
        fontFamily:"Poppins-Light"
    }
})