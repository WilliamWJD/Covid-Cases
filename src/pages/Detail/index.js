import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native'


import HeaderDetail from './HeaderDetail'

const Detail = () => {
    const [detail, setDetail] = useState([])

    const route = useRoute()

    const data = route.params.data
    const filter = route.params.filter

    async function filterCasesDetail(){
        const detailFilter = await data.Countries.filter(item=>{
            return item.CountryCode === filter
        })
        setDetail(detailFilter[0])
    }

    useEffect(() =>{
        filterCasesDetail()
    },[])

    return(
        <View style={styles.container}>
            <HeaderDetail 
                detail={detail}
            />
            {/* <Text>{detail.Slug}</Text>
            <Text>{detail.TotalConfirmed}</Text>
            <Text>{detail.TotalDeaths}</Text>
            <Text>{detail.TotalRecovered}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default Detail