import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';


const themeImg = {
    DrawMenu: require('../images/Happy.png'),
    AnimalMenu: require('../images/beary.jpg')
}

export default function Theme({ theme }) {
    const Navigation = useNavigation();
    function onClick() {
        Navigation.navigate(theme);
    }

    return (
        <TouchableOpacity onPress={onClick}>
            <Image source={themeImg[theme]}
                style={{
                    width: 200,
                    height: 200,
                    resizeMode: 'contain',
                    borderColor: '#fff',
                    borderRadius: 10,
                    borderWidth: 1,
                }} />
        </TouchableOpacity>
    )
}