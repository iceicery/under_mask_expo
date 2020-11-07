import React from 'react';
import { View, ImageBackground, Button, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors.js';
export default function Welcome() {
    return (
        <ImageBackground source={require('../images/welcomeImg2.jpg')} style={styles.container}>
            <View style={styles.logoBox}>
                <Image source={require('../images/logo4.png')} style={styles.logo} />
                <Text style={styles.text}>Show your mood under the mask.</Text>
            </View>
            <Button title="Let's go!" color={colors.primary} style={styles.button} />
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        resizeMode: "contain",
        flex: 1,
        justifyContent: "flex-end",
    },

    logoBox: {
        position: "absolute",
        top: 20,
        right: 20,
        width: 200,
    },
    logo: {
        alignItems: 'center',
        width: 200,
        height: 200,
    },
    text: {
        alignItems: 'center',
        fontSize: 30,
        color: colors.dark,
    },

    button: {
        width: 100,
        height: 100,
    }
})