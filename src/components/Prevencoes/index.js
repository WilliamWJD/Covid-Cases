import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

import im1 from '../../assets/im1.png'
import im2 from '../../assets/im2.png'
import im3 from '../../assets/im3.png'

const Prevecoes = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.prevencoesTitle}>Prevenções</Text>
            <View style={styles.boxPrevencoes}>
                <View style={styles.boxPrevencoesItem}>
                    <View style={styles.boxPrevencoesImageFundo}>
                        <Image
                            source={im1}
                            style={styles.boxPrevencoesImage}
                        />
                    </View>
                    <Text style={styles.boxPrevencoesItemTitle}>Utilize máscara</Text>
                </View>
                <View style={styles.boxPrevencoesItem}>
                    <View style={styles.boxPrevencoesImageFundo}>
                        <Image
                            source={im2}
                            style={styles.boxPrevencoesImage}
                        />
                    </View>
                    <Text style={styles.boxPrevencoesItemTitle}>Lave as mãos</Text>
                </View>
                <View style={styles.boxPrevencoesItem}>
                    <View style={styles.boxPrevencoesImageFundo}>
                        <Image
                            source={im3}
                            style={styles.boxPrevencoesImage}
                        />
                    </View>
                    <Text style={styles.boxPrevencoesItemTitle}>Utilize álcool 70%</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:15,
    },

    prevencoesTitle:{
        color:'#34495e',
        fontWeight:'bold',
        fontSize:18
    },

    boxPrevencoes:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15
    },

    boxPrevencoesItem:{
        width:100,
        height:160,
        alignItems:'center'
    },

    boxPrevencoesImageFundo:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'#FAE1E9',
        justifyContent:'center',
        alignItems:'center'
    },

    boxPrevencoesImage:{
        width:70,
        height:70
    },

    boxPrevencoesItemTitle:{
        marginTop:6,
        color:'#34495e',
        fontWeight:'bold',
        fontSize:12
    }
})

export default Prevecoes