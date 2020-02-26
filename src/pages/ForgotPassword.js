import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Logo from '../components/Logo';

import colors from '../styles/colors';

export default function ForgotPassword(){
    return(
        <View style={styles.viewContainer}>
            <View style={styles.viewSuperior}>
                <Animatable.Text animation='fadeInRight' duration={1000} style={{fontSize: 34, color: colors.branco, fontWeight: 'bold', marginLeft: 13, fontFamily: 'Roboto-Bold.ttf'}}>Esqueceu a senha?</Animatable.Text>
            </View>
            <View>
                <Animatable.Text animation='fadeInLeft' delay={1000} style={{fontSize: 17, color: colors.branco, marginLeft: 13, fontWeight: 'bold'}}>Não tem problema, nós recuperamos pra você</Animatable.Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: colors.rosa,
        flex: 1
    },
    viewSuperior: {
        //backgroundColor: colors.preto,
        height: '20%',
        justifyContent: 'center',
        
    },
    viewMeio: {
        backgroundColor: colors.branco,
        height: '30%'
    },
    viewInferior: {
        
    }
})