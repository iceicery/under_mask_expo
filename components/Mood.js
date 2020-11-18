import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { moodContext } from '../contexts/moodContext';
//import useScreenOrientation from 'react-hook-screen-orientation'

export default function Mood() {
    const moodData = useContext(moodContext);
    const moodImg = {
        Happy: require('../images/Happy.png'),
        Sad: require('../images/Sad.png'),
        Angry: require('../images/Angry.png'),
        Confused: require('../images/confused.png'),
        Kiss: require('../images/kiss.png'),
        Laugh: require('../images/laugh.png'),
        Scared: require('../images/scared.png'),
        Scream: require('../images/scream.png'),
    }
    const noseImg = {
        nose1: require('../images/nose.png'),
        nose2: require('../images/nose2.png'),
    }

    return (
        <View style={styles.container}>
            <Image source={noseImg['nose2']}
                style={{
                    backgroundColor: moodData.skin,
                    flex: 1,
                    resizeMode: 'contain',
                    tintColor: "#000",
                }} />
            <Image source={moodImg[moodData.mood]}
                style={{
                    backgroundColor: moodData.skin,
                    flex: 2,
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