import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moodContext } from '../contexts/moodContext';
import colors from '../config/colors';
import MoodMenu from './MoodMenu';
import SkinMenu from './SkinMenu';
import LipMenu from './LipMenu';
import { useNavigation } from '@react-navigation/native';
import { useDimensions } from '@react-native-community/hooks';
export default function DrawMenu() {
    const navigation = useNavigation();
    const moodData = useContext(moodContext);
    const mood = ['Happy', 'Angry', 'Sad', 'Confused', 'Kiss', 'Laugh', 'Scared', 'Scream'];
    const skinTone = ['#ffe0bd', '#ffcd94', '#eac086', '#ffad60', '#ffe39f', '#fff', '#ffdbac', '#f1c27d', '#e0ac69', '#c68642', '#8d5524'
        , '#533317', '#774921', '#9B5F2B', '#BE7535', '#CF8C52', '  #D9A476', '#E3BC9A'];
    const lipColors = ['#000', '#ffbaba', '#ff7b7b', '#ff5252', '#ff0000', '#a70000', '#ee4035', '#f37736'];
    const moodImg = {
        Happy: require('../images/Happy.png'),
        Sad: require('../images/Sad.png'),
        Angry: require('../images/Angry.png'),
        Confused: require('../images/confused.png'),
        Kiss: require('../images/kiss.png'),
        Laugh: require('../images/laugh.png'),
        Scared: require('../images/scared.png'),
        Scream: require('../images/scream.png'),
    }

    function toMood() {
        navigation.navigate('Mood');
    }
    const { height, width } = useDimensions().window;
    const islandscape = width > height;
    return (
        <View style={islandscape ? styles.landscape : styles.portrait}>
            <View style={styles.menu}>
                <Text style={styles.text}>Choose your mood:</Text>
                <View style={styles.container}>
                    {mood.map((item, i) => {
                        return <MoodMenu mood={item} key={i} changeMood={moodData.changeMood} />
                    })}
                </View>
                <Text style={styles.text}>Choose your skintone:</Text>
                <View style={styles.container}>
                    {skinTone.map((item, i) => {
                        return <SkinMenu color={item} key={i} changeSkin={moodData.changeSkin} />
                    })}
                </View>
                <Text style={styles.text}>Choose your lip color:</Text>
                <View style={styles.container}>
                    {lipColors.map((item, i) => {
                        return <LipMenu lip={item} key={i} changeLip={moodData.changeLip} />
                    })}
                </View>
                <TouchableOpacity style={styles.button} onPress={toMood}><Text style={styles.buttontext}>Confrim</Text></TouchableOpacity>
            </View>
            <View style={styles.containerImg}>
                <Image source={moodImg[moodData.mood]}
                    style={{
                        backgroundColor: moodData.skin,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                        tintColor: moodData.lip,
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    landscape: {
        flex: 1,
        flexDirection: 'row',
    },
    portrait: {
        flex: 1,
        flexDirection: 'column',
    },
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
