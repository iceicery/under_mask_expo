import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AnimalList from '../components/AnimalList';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

export default function AnimalMenu() {
    const navigation = useNavigation()
    const animals = ['beary', 'honeyTing', 'elsa', 'kiss', 'silly', 'smile', 'zip', 'no', 'talk', 'spongbob', 'bite', 'ahh', 'scary', 'terrible', 'friday', 'yes', 'flossing', 'bek', 'smileup'];
    function toThemeMenu() {
        navigation.navigate('ThemeMenu');
    }

    return (
        <View style={styles.menu}>
            <Text style={styles.text}>Choose one</Text>
            <View style={styles.container}>
                {animals.map((animal, i) => {
                    return <AnimalList animal={animal} key={i} />
                })}
            </View>
            <TouchableOpacity onPress={toThemeMenu} style={styles.button}>
                <Text style={styles.buttontext}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 2,
        backgroundColor: colors.dark,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        padding: 20,
    },
    text: {
        fontSize: 25,
        color: colors.light,
        paddingTop: 15,
        paddingLeft: 15,
    },
    buttontext: {
        fontSize: 15,
        color: colors.light,
        padding: 5,
        alignItems: 'center',
    },

    button: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 100,
        alignItems: 'center',
        color: colors.light,
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
    containerImg: {
        flex: 1,
        justifyContent: 'center'
    }
})