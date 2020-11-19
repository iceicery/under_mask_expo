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
        kiss: { uri: 'https://images.unsplash.com/photo-1579752515149-489d8d711342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' },
        silly: { uri: 'https://images.unsplash.com/photo-1579752515255-40a127455074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
        smile: { uri: 'https://images.unsplash.com/photo-1581939511501-4ec557ff0957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }, //Marek Studzinski'}
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