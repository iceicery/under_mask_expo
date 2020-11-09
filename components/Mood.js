import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
export default function Mood() {
    return (
        <View style={styles.container}>
            <Image source={require('../images/Happy.png')} style={styles.img} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: '#eac086',
        tintColor: 'red',
    }
})