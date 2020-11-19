import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import { useDimensions } from '@react-native-community/hooks';

export default function Animate() {
    const { height, width } = useDimensions().window;
    const islandscape = width > height;
    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: 'https://media1.tenor.com/images/fcc302da9fc56ca752e3fdb11cf81916/tenor.gif?itemid=5640314' }}
                style={islandscape ? styles.container : styles.portrait} />
        </View>
    )
}

const styles = StyleSheet.create({
    portrait: {
        transform: [{ rotate: '90deg' }],
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})