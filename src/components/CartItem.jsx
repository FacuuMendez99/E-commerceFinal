import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import {  Feather } from '@expo/vector-icons'; 
import { removeItem,incrementItem,decrementItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import CustomModal from './CustomModal';


const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const  [isModalVisible, setIsModalVisible] = useState(false);
    
    const onRemoveToCart = () => {
        dispatch(removeItem({ id: item.id }));
    }
    const onIncrementItem = () => {
        dispatch(incrementItem({ id: item.id }));
    };

    const onDecrementItem = () => {
        if (item.quantity > 1) {
            dispatch(decrementItem({ id: item.id }));
        }else {
            setIsModalVisible(true)
        }
    }
    ;
    return (
        <View style={styles.cartItemContainer}>
            <Image
                style={styles.imageCartItem}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <View style={styles.cartContenContainer}>
                <View style={{flexDirection:"row",marginBottom:10}}>
                    <Text style={styles.cartTitle}>{item.title}</Text>
                    <Text  style={styles.cartTotalPrice}>Total: ${item.price*item.quantity}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderRadius:8}} onPress={onDecrementItem}>
                            <MaterialIcons name="remove" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={{fontSize:16}}>{item.quantity}</Text>
                        <TouchableOpacity style={{borderWidth:1,borderRadius:8}} onPress={onIncrementItem}>
                            <MaterialIcons name="add" size= {24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.trashCart} onPress={()=>setIsModalVisible(true)}>
                        <Feather name="trash" size={24} color="black" />
                    </TouchableOpacity>  
                </View>
            </View>
            <CustomModal
                animationTypeProp="slide"
                isVisibleProp={isModalVisible}
                itemSelectedProp={item}
                onDeleteItemHandlerEvent={onRemoveToCart}
                setModalVisibleEvent={setIsModalVisible}
            />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 10,
        borderBottomWidth:0.5,
        margin:10
    },
    imageContainer: {
        flex: 1,
    },
    imageCartItem: {
        height: 80,
        width:80,
        marginRight:10,
        
    },
    cartContenContainer:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    trashCart: {
        marginLeft: 'auto',
    },
    cartTitle:{
        fontFamily:'Poppins-Regular',
        textTransform: 'capitalize',
        fontSize:15,
        width:"65%"
    },
    cartTotalPrice:{
        fontFamily:'Poppins-Bold',
        textTransform: 'capitalize',
        fontSize:16,
        color:colors.primary,
        marginLeft:"auto"
    }
})