import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { moodContext } from '../contexts/moodContext';
export default function AnimalList({ animal }) {
    const moodData = useContext(moodContext);
    const navigation = useNavigation();
    const AnimalImg = {
        beary: require('../images/beary.jpg'),
        honeyTing: require('../images/honeyTing.jpg'),
        elsa: require('../images/elsa.jpg'),
        kiss: { uri: 'https://images.unsplash.com/photo-1579752515149-489d8d711342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80' }, //Joey Nicotra
        silly: { uri: 'https://images.unsplash.com/photo-1579752515255-40a127455074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }, //Joey Nicotra
        smile: { uri: 'https://images.unsplash.com/photo-1581939511501-4ec557ff0957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }, //Marek Studzinski

    };
    function toTheAnimal() {
        moodData.changeAnimal(animal);
        navigation.navigate('Animal');
    }
    return (

        <TouchableOpacity onPress={toTheAnimal}>
            <Image source={AnimalImg[animal]}
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    borderColor: '#fff',
                    borderRadius: 10,
                    borderWidth: 1,
                }} />
        </TouchableOpacity>
    )
}