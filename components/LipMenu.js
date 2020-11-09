import React from 'react';
import { TouchableOpacity } from 'react-native';
export default function SkinMenu({ lip, changeLip }) {
    function onClick() {
        changeLip(lip);
    }
    return (
        <TouchableOpacity style={{ backgroundColor: lip, width: 30, height: 30, borderColor: '#fff', borderWidth: 0.5 }} onPress={onClick}></TouchableOpacity>
    )
}
