import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import CovidImage from '../../assets/covidImage.png'


const BoxWord = ({ data }) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#6057c1', '#473f97']} style={styles.boxWordCases}>
                <Image source={CovidImage} style={{ width: 80, height: 80 }} />
                <View style={styles.boxWordCasesInformations}>
                    <Text style={styles.boxWordCasesInformationsTitle}> Casos de covid-19 no mundo </Text>
                    <Text style={styles.boxWordCasesInformationsValue}>                  
                        {
                            `Casos confirmados: ${Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.TotalConfirmed)}`
                        }
                    </Text>
                    <Text style={styles.boxWordCasesInformationsValue}>               
                        {
                            `Total de mortes: ${Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.TotalDeaths)}`
                        }
                    </Text>
                    <Text style={styles.boxWordCasesInformationsValue}>
                         
                        {
                            `Total de recuperados: ${Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data.TotalRecovered)}`
                        }
                    </Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginBottom: 10
    },

    boxWordCases: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 15,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    boxWordCasesInformations: {
        alignItems: 'center',
    },

    boxWordCasesInformationsTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 8
    },

    boxWordCasesInformationsValue: {
        color: '#ecf0f1',
        fontSize: 12
    }
})

export default BoxWord