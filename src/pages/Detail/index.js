import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, StatusBar } from 'react-native'
import { useRoute } from '@react-navigation/native'

import HeaderDetail from './HeaderDetail'
import DetailChart from './DetailChart'

const Detail = () => {
    const [detail, setDetail] = useState([])
    const [dataChart, setDataChart] = useState([])

    const route = useRoute()

    const data = route.params.data
    const filter = route.params.filter

    async function filterCasesDetail() {
        const detailFilter = await data.filter(item => {
            return item.CountryCode === filter
        })
        setDetail(detailFilter[0])
    }

    const dataChartCountry = [
        {
            title:'Confirmados',
            value: detail.TotalConfirmed,
            svg: {
                fill: '#3498db',
            }
        },
        {
            title:'Mortes',
            value: detail.TotalDeaths,
            svg: {
                fill: '#e74c3c',
            }
        },
        {
            title:'Recuperados',
            value: detail.TotalRecovered,
            svg: {
                fill: '#27ae60',
            }
        },
        {
            title:'Novas Mortes',
            value: detail.NewDeaths,
            svg: {
                fill: '#e67e22',
            }
        },
        {
            title:'Novos Confirm',
            value: detail.NewConfirmed,
            svg: {
                fill: '#8e44ad',
            }
        }
    ]

    useEffect(() => {
        filterCasesDetail()
    }, [])


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#473F96" barStyle="light-content" />
            <HeaderDetail
                detail={detail}
            />
            <DetailChart
                data={dataChartCountry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Detail