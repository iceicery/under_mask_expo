import React from 'react';
import { Image } from 'react-native';
export default function Mood() {
    return (
        <Image source={require('../images/Happy.png')} style={{ flex: 1, resizeMode: "contain" }} />
    )
}