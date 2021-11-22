import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
    return ( 
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.openIcon} />
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 20,
        left: 20,
    },
    container:{
        backgroundColor:colors.black,
        flex: 1,
    },
    image:{
        width:'100%',
        height:'100%',
    },
    openIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 20,
        right: 20,
    },
})

export default ViewImageScreen;