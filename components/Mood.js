import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
export default function Mood({ mood, skin, lip }) {
    return (
        <View style={styles.container}>
            <Image source={require("../images/" + mood + ".png")}
                style={{
                    backgroundColor: skin,
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                    tintColor: lip,
                }} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
})