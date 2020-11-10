import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { moodContext } from '../contexts/moodContext';
export default function Mood() {
    const moodData = useContext(moodContext);
    const moodImg = {
        Happy: require('../images/Happy.png'),
        Sad: require('../images/Sad.png'),
        Angry: require('../images/Angry.png'),
    }
    return (
        <View style={styles.container}>
            <Image source={moodImg[moodData.mood]}
                style={{
                    backgroundColor: moodData.skin,
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                    tintColor: moodData.lip,
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