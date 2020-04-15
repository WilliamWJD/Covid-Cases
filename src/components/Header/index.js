import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ModalFilter from '../Modal'

const Header = ({ data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [filterValue, setFilterValue] = useState('')

    const navigation = useNavigation()

    function navigateToDetail(){
        if(!filterValue){
            Alert.alert('Atenção !','Selecione um pais para verificar os casos de covid-19 correspondente')
        }else{
            navigation.navigate('Detail')
        }
    }

    function habilitaModal(){
        setModalVisible(true)
        console.log(modalVisible)
    }

    function desabilitaModal(){
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <ModalFilter 
                modalVisible={modalVisible}
                onCancel={desabilitaModal}
                data={data}
            />

            <View style={styles.boxFilter}>
                <Text style={styles.boxFilterTitle}>Covid-19</Text>
                <TouchableOpacity 
                    style={styles.boxFilterButton}
                    onPress={()=>{habilitaModal()}}
                >
                    <Text style={styles.boxFilterButtonText}>{filterValue}</Text>
                    <MaterialIcons name="arrow-drop-down" size={25}/>
                </TouchableOpacity>
            </View>
            <View style={styles.boxInformation}>
                <Text style={styles.boxInformationTitle}>Lorem ipson sit dolor ?</Text>
                <Text style={styles.boxInformationDescription}>Lorem ipson sit dolor amet Lorem ipson sit dolor amet Lorem ipson sit dolor amet Lorem ipson sit dolor amet Lorem ipson sit dolor amet </Text>
            </View>
            <TouchableOpacity style={styles.filtrar} onPress={()=>navigateToDetail()    }>
                <Text style={styles.filtrarText}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#473F96',
        height: 240,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
    },

    boxFilter: {
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    boxFilterTitle: {
        color: '#ecf0f1',
        fontWeight: 'bold',
        fontSize: 20
    },

    boxInformation: {
        marginHorizontal: 15,
    },

    boxFilterButton:{
        width:75,
        height:30,
        borderRadius:15,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:3
    },

    boxFilterButtonText:{
        color:'#34495e',
        fontWeight:'bold'
    },  

    boxInformationTitle: {
        color: '#ecf0f1',
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold'
    },

    boxInformationDescription: {
        color: '#d1d1d1',
        fontSize: 12
    },

    filtrar: {
        backgroundColor: '#FD5858',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 15,
        alignSelf: 'flex-end',
        marginRight: 20
    },

    filtrarText: {
        color: '#fff',
        fontWeight: 'bold'
    }

})

export default Header