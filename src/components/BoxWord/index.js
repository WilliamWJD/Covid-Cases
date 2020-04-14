import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import NumberFormat from 'react-number-format';

import CovidImage from '../../assets/covidImage.png'

import api from '../../services/api.js'

const BoxWord = () => {
    const [dataWord, setDataWord] = useState([])

    async function loadData(){
        const response = await api.get('/summary')
        setDataWord(response.data.Global)
    }

    useEffect(()=>{
        loadData()
    },[])

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#6057c1', '#473f97']} style={styles.boxWordCases}>
                <Image source={CovidImage} style={{ width: 80, height: 80 }}/>
                <View style={styles.boxWordCasesInformations}>
                    <Text style={styles.boxWordCasesInformationsTitle}> Casos de covid-19 no mundo </Text>
                    <Text style={styles.boxWordCasesInformationsValue}>Casos confirmados: {dataWord.TotalConfirmed}</Text>
                    <Text style={styles.boxWordCasesInformationsValue}>Total de mortes: {dataWord.TotalDeaths}</Text>
                    <Text style={styles.boxWordCasesInformationsValue}>Total de recuperados: {dataWord.TotalRecovered}</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginBottom:10
    },

    boxWordCases: {
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 15, 
        height:120,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15
    },

    boxWordCasesInformations:{
        alignItems:'center'
    },

    boxWordCasesInformationsTitle:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15,
        marginBottom:8
    },

    boxWordCasesInformationsValue:{
        color:'#ecf0f1',
        fontSize:12
    }
})

export default BoxWord