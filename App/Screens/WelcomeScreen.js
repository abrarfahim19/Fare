import React from 'react';
import { ImageBackground, StyleSheet, View,Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text>Sell What you don't Need</Text>
            </View>
            <View style={styles.login}></View>
            <View style={styles.signup}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    login:{
        height:50,
        width:'100%',
        backgroundColor:'#fc5c65'
    },
    logo:{
        height:100,
        width:100,
    },
    logoContainer:{
        alignItems:'center',
        position:'absolute',
        top:50,
    },
    signup:{
        height:50,
        width:'100%',
        backgroundColor:'#4ecdc4'
    }
})

export default WelcomeScreen;