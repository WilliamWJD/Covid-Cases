import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { MaterialIcons } from '@expo/vector-icons'

const DetailChart = ({data}) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxLegend}>
                {data.map(item => (
                    <View style={styles.boxLegendItem}>
                        <MaterialIcons name="lens" color={item.svg.fill} size={17}/>
                        <Text>{item.title}</Text>
                    </View>
                ))}          
            </View>
            <BarChart
                style={{flex:1, height:200, marginRight:10 }}
                data={data}
                gridMin={0}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </BarChart>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },

    boxLegend:{
        marginHorizontal:10,
        justifyContent:'center'
    },

    boxLegendItem:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:8
    }
})

export default DetailChart