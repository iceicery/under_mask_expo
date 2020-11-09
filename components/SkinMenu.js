import React from 'react';
import { TouchableOpacity, View } from 'react-native';
export default function SkinMenu({ color, changeSkin }) {
    function onClick() {
        changeSkin(color);
    }
    return (
        <TouchableOpacity style={{ backgroundColor: color, width: 30, height: 30, }} onPress={onClick}></TouchableOpacity>
    )
}

