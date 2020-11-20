import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { moodContext } from '../contexts/moodContext';
import { useDimensions } from '@react-native-community/hooks';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

export default function Animal() {
    const moodData = useContext(moodContext);
    const navigation = useNavigation();
    const AnimalImg = {
        beary: require('../images/beary.jpg'),
        honeyTing: require('../images/honeyTing.jpg'),
        elsa: require('../images/elsa.jpg'),
        kiss: { uri: 'https://images.unsplash.com/photo-1579752515149-489d8d711342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' },
        silly: { uri: 'https://images.unsplash.com/photo-1579752515255-40a127455074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
        smile: { uri: 'https://images.unsplash.com/photo-1581939511501-4ec557ff0957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }, //Marek Studzinski'}
        zip: { uri: 'https://media1.tenor.com/images/4207f897fc66ddb9038cbacc1adfff97/tenor.gif?itemid=12420958' },//KelseeDell @tenor
        no: { uri: 'https://media1.tenor.com/images/6b6d0a671c547a7455bb21000b879c97/tenor.gif?itemid=4959231' },//Bbvmoore1965 @tenor
        talk: { uri: 'https://media1.tenor.com/images/aa555284d87afdfd7b103cf5672fca48/tenor.gif?itemid=10868466' }, //
        spongbob: { uri: 'https://media1.tenor.com/images/924099ea1bc8aba3fdbe78acfe17c9ad/tenor.gif?itemid=5509861' },
        bite: { uri: 'https://media1.tenor.com/images/f2ef975ffc8d78fd62c17ec6a30f1544/tenor.gif?itemid=6121434' },
        ahh: { uri: 'https://media1.tenor.com/images/50f9ec839fe4e08043f26900dbdf2c09/tenor.gif?itemid=15896255' },
        scary: { uri: 'https://media1.tenor.com/images/a98be914f2e6aa8963522f747f6eb678/tenor.gif?itemid=5467409' },
        terrible: { uri: 'https://media1.tenor.com/images/2a532b5936f8babfa298ccc4d334f34f/tenor.gif?itemid=7389997' },
        friday: { uri: 'https://media1.tenor.com/images/ee3a44e98f5dcbef692539b1381f5167/tenor.gif?itemid=8776986' },
        yes: { uri: 'https://media1.tenor.com/images/d118443812fc0bb5035dfcb530f92f78/tenor.gif?itemid=17953850' },
        flossing: { uri: 'https://media1.tenor.com/images/7b1adbb09b9c74cfbab726e1751c04c4/tenor.gif?itemid=10375756' },
        bek: { uri: 'https://media1.tenor.com/images/f24fd48b6dc828e819956c1e7c0d1cf3/tenor.gif?itemid=10171656' },
        smileup: { uri: 'https://media1.tenor.com/images/7b7e946bc25c99502c1a6bfd33280796/tenor.gif?itemid=17783344' },

    };
    const { height, width } = useDimensions().window;
    const islandscape = width > height;
    function onSwipe() {
        navigation.navigate('AnimalMenu');
    }
    return (
        <GestureRecognizer style={styles.container} onSwipe={onSwipe}>
            <Image source={AnimalImg[moodData.animal]}
                style={islandscape ? styles.img : styles.portrait} />
        </GestureRecognizer>
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