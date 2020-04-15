import React, { useState, useEffect } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

const ModalFilter = ({ modalVisible, onCancel, data }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.modalContainer}>
                <FlatList
                    data={data.Countries}
                    keyExtractor={item => item.Country}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemCountry}>
                            <Text style={styles.itemCountryText}>{item.Country}</Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.boxActions}>
                    <TouchableOpacity
                        onPress={onCancel}
                        style={styles.buttonCancel}
                    >
                        <Text style={styles.buttonCancelText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    itemCountry:{
        borderWidth:1,
        borderColor:'#ecf0f1',
        alignItems:'center',
        paddingVertical:10
    },

    itemCountryText:{
        color:'#7f8c8d',
        fontWeight:'bold'
    },

    boxActions:{
        backgroundColor:'#fff',
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center'
    },

    buttonCancel:{
        backgroundColor:'#473F96',
        paddingHorizontal:25,
        paddingVertical:10,
        borderRadius:10
    },

    buttonCancelText:{
        color:'#fff',
        fontWeight:'bold'
    }
})

export default ModalFilter