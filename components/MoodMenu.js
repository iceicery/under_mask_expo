import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function MoodMenu({ mood, changeMood }) {
    function onClick() {
        changeMood(mood);
    }
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}><Text style={styles.text}>{mood}</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        margin: 5,
        borderRadius: 5,
        padding: 2,
        alignItems: 'center',
        width: 100,

    },
    text: {
        color: colors.light,
        fontSize: 20,
    }
})