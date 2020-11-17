import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { moodContext } from '../contexts/moodContext';
import { useDimensions } from '@react-native-community/hooks';

export default function Animal() {
    const moodData = useContext(moodContext);
    const AnimalImg = {
        beary: require('../images/beary.jpg'),
        honeyTing: require('../images/honeyTing.jpg'),
        elsa: require('../images/elsa.jpg'),
    };
    const { height, width } = useDimensions().window;
    const islandscape = width > height;
    return (
        <View style={styles.container}>
            <Image source={AnimalImg[moodData.animal]}
                style={islandscape ? styles.img : styles.portrait} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    portrait: {
        transform: [{ rotate: '90deg' }],
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    }

})