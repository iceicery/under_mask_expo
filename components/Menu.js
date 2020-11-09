import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import MoodMenu from './MoodMenu';
import SkinMenu from './SkinMenu';
import LipMenu from './LipMenu';
export default function Menu({ changeMood, changeSkin, changeLip }) {
    const mood = ['Happy', 'Angry', 'Sad'];
    const skinTone = ['#ffe0bd', '#ffcd94', '#eac086', '#ffad60', '#ffe39f', '#fff', '#ffdbac', '#f1c27d', '#e0ac69', '#c68642', '#8d5524'
        , '#533317', '#774921', '#9B5F2B', '#BE7535', '#CF8C52', '#D9A476', '#E3BC9A'];
    const lipColors = ['#000', '#ffbaba', '#ff7b7b', '#ff5252', '#ff0000', '#a70000', '#ee4035', '#f37736'];
    return (
        <View style={styles.menu}>
            <Text style={styles.text}>Choose your mood:</Text>
            <View style={styles.container}>
                {mood.map((item, i) => {
                    return <MoodMenu mood={item} key={i} changeMood={changeMood} />
                })}
            </View>
            <Text style={styles.text}>Choose your skintone:</Text>
            <View style={styles.container}>
                {skinTone.map((item, i) => {
                    return <SkinMenu color={item} key={i} changeSkin={changeSkin} />
                })}
            </View>
            <Text style={styles.text}>Choose your lip color:</Text>
            <View style={styles.container}>
                {lipColors.map((item, i) => {
                    return <LipMenu lip={item} key={i} changeLip={changeLip} />
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
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
        fontSize: 30,
        color: colors.light,
        padding: 20,
    }
})
