import { View, Text, Modal,StyleSheet,Button } from 'react-native'
import { colors } from '../global/colors'

const CustomModal = (
    { 
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        onDeleteItemHandlerEvent,
        setModalVisibleEvent
    }
) => {
    return(
        <Modal
        animationType={animationTypeProp}
        visible={isVisibleProp}
        >
            <View
                style={styles.modalContainer}
            >
                <Text style={{fontFamily:'Poppins-Regular'}}>Se eliminará:</Text>
                <Text style={{fontFamily:'Poppins-Bold'}}>{itemSelectedProp.title}</Text>
            <View style={styles.modalButtons}>  
                <Button
                title='Aceptar'
                color={colors.success}
                onPress={onDeleteItemHandlerEvent}
                />
                <Button
                title='Cancelar'
                color={colors.error}
                onPress={()=>setModalVisibleEvent(!isVisibleProp)}
                />
            </View>
                </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalContainer:{
        marginTop:100,
        marginHorizontal:20,
        padding:10,
        borderWidth:1,
        borderRadius:15,
    },
    modalButtons:{
        marginTop:30,
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-around',
    }
})

