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
    };
    function toTheAnimal() {
        moodData.changeAnimal(animal);
        navigation.navigate('Animal');
    }
    return (

        <TouchableOpacity onPress={toTheAnimal}>
            <Image source={AnimalImg[animal]}
                style={{
                    width: '100px',
                    height: '100px',
                    resizeMode: 'contain',
                    borderColor: '#fff',
                    borderRadius: '10px',
                    borderWidth: '1px',
                }} />
        </TouchableOpacity>
    )
}