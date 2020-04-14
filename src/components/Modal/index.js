import React,{useState} from 'react'
import { View, Text, Modal } from 'react-native'

const ModalFilter = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const onClosePres = () => {
        setModalVisible(false)
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <Text>KKKKKKKKKKKKKKKKKK</Text>
            </Modal>
        </View>
    )
}

export default ModalFilter