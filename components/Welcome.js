import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors.js';
export default function Welcome() {
    const navigation = useNavigation();
    function toMenu() {
        navigation.navigate('Menu');
    }
    return (
        <ImageBackground source={require('../images/welcomeImg3.jpg')} style={styles.container}>
            <View style={styles.logoBox}>
                <Image source={require('../images/undermasklogo.png')} style={styles.logo} />
                <Text style={styles.text}>Show your mood under the mask.</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={toMenu}>
                <Text style={styles.text}>Let's go!</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        resizeMode: "contain",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    logoBox: {
        alignItems: 'center',
        width: 150,
        marginBottom: 50,
    },
    logo: {
        alignItems: 'center',
        tintColor: colors.light,
        marginBottom: 20,
        width: 150,
        height: 150,
        borderColor: colors.light,
        borderWidth: 1,
    },
    text: {
        alignItems: 'center',
        fontSize: 20,
        color: colors.light,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.light,
        width: 100,
        height: 50,
        borderRadius: 10,
        borderColor: colors.light,
        borderWidth: 1.5,
        backgroundColor: colors.primary,
    }

})