import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default function Theme({ theme }) {
    const Navigation = useNavigation();
    function onClick() {
        Navigation.navigate(theme);
    }
    const themeImg = {
        DrawMenu: require('../images/Happy.png'),
        AnimalMenu: require('../images/beary.jpg')
    }
    return (
        <TouchableOpacity onPress={onClick}>
            <Image source={themeImg[theme]}
                style={{
                    width: '200px',
                    height: '200px',
                    resizeMode: 'contain',
                    borderColor: '#fff',
                    borderRadius: '10px',
                    borderWidth: '1px',
                }} />
        </TouchableOpacity>
    )
}