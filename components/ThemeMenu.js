import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import Theme from '../components/Theme';

const themes = ['DrawMenu', 'AnimalMenu'];

export default function ThemeMenu() {
    return (
        <>
            <View style={styles.menu}>
                <Text style={styles.text}>Choose your theme:</Text>
                <View style={styles.container}>
                    {themes.map((theme, i) => {
                        return <Theme theme={theme} key={i} />
                    })}
                </View>
            </View>
        </>
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
        fontSize: 25,
        color: colors.light,
        padding: 15,
    },
    button: {
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