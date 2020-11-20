import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { moodContext } from '../contexts/moodContext';
import { useDimensions } from '@react-native-community/hooks';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
//import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
export default function Mood() {
    const moodData = useContext(moodContext);
    const navigation = useNavigation();
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
        Simple: require('../images/nose.png'),
        Real: require('../images/nose2.png'),
    }
    const { height, width } = useDimensions().window;
    const islandscape = width > height;
    function onSwipe() {
        navigation.navigate('DrawMenu');
    }

    return (
        <GestureRecognizer style={islandscape ? styles.container : styles.portrait} onSwipe={onSwipe}>
            <Image source={noseImg[moodData.nose]}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                    tintColor: "#000",
                }} />
            <Image source={moodImg[moodData.mood]}
                style={{
                    backgroundColor: moodData.skin,
                    width: '100%',
                    flex: 1,
                    resizeMode: 'contain',
                    tintColor: moodData.lip,
                }} />
        </GestureRecognizer>
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
        justifyContent: 'center'
    },
})