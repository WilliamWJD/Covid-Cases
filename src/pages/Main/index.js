import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import api from '../../services/api'
import Header from '../../components/Header'
import Prevencoes from '../../components/Prevencoes'
import BoxWord from '../../components/BoxWord'

const Main = () => {
    const [data, setData] = useState([])

    async function loadPais() {
        const response = await api.get('/summary')
        setData(response.data.Countries)
        console.log(data)
    }

    useEffect(() => {
        loadPais()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Header />
            <Prevencoes />
            <BoxWord />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },

    boxPrevencoes: {
        flexDirection: 'row',
    },

    boxPrevencoesItem: {
        width:50,
        height:60,
        backgroundColor:'red'
    }

})

export default Main