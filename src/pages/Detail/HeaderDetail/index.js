import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const HeaderDetail = ({ detail }) => {
    const navigation = useNavigation()

    function navigateGoBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <TouchableOpacity onPress={navigateGoBack}>
                    <MaterialIcons name='keyboard-arrow-left' size={40} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.country}>{detail.Country}</Text>
            </View>
            <View style={styles.boxDescriptionTitle}>
                <MaterialIcons name="insert-chart" size={20} color="#fff" />
                <Text style={styles.titleDetail}>Estatística</Text>
            </View>

            <View style={styles.boxEstatistics}>
                <View style={[styles.boxConStatus, { backgroundColor: '#3498db' }]}>
                    <Text style={styles.boxConStatusTitle}>Confirmados</Text>
                    <Text style={styles.boxConStatusValue}>
                        {
                            Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(detail.TotalConfirmed)
                        }
                    </Text>
                </View>
                <View style={[styles.boxConStatus, { backgroundColor: '#e74c3c' }]}>
                    <Text style={styles.boxConStatusTitle}>Mortes</Text>
                    <Text style={styles.boxConStatusValue}>
                        {
                            Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(detail.TotalDeaths)
                        }
                    </Text>
                </View>
                <View style={[styles.boxConStatus, { backgroundColor: '#2ecc71' }]}>
                    <Text style={styles.boxConStatusTitle}>Recuperados</Text>
                    <Text style={styles.boxConStatusValue}>
                        {
                            Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(detail.TotalRecovered)
                        }
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 330,
        backgroundColor: '#473F97',
    },

    boxTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    boxDescriptionTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },

    country: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 20,
    },

    titleDetail: {
        marginTop: 20,
        color: '#fff',
        marginLeft: 5,
        fontSize: 20,
        marginBottom: 20
    },

    boxEstatistics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5
    },

    boxConStatus: {
        width: 110,
        height: 100,
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingLeft: 10
    },

    boxConStatusTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13
    },

    boxConStatusValue: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default HeaderDetail