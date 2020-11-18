import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moodContext } from '../contexts/moodContext';
import colors from '../config/colors';
import MoodMenu from './MoodMenu';
import NoseMenu from './NoseMenu';
import SkinMenu from './SkinMenu';
import LipMenu from './LipMenu';
import { useNavigation } from '@react-navigation/native';
import { useDimensions } from '@react-native-community/hooks';
export default function DrawMenu() {
    const navigation = useNavigation();
    const moodData = useContext(moodContext);
    const mood = ['Happy', 'Angry', 'Sad', 'Confused', 'Kiss', 'Laugh', 'Scared', 'Scream'];
    const nose = ['None', 'Simple', 'Real'];
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
    };
    const noseImg = {
        Simple: require('../images/nose.png'),
        Real: require('../images/nose2.png'),
    };

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
                <Text style={styles.text}>Choose your nose:</Text>
                <View style={styles.container}>
                    {nose.map((item, i) => {
                        return <NoseMenu nose={item} key={i} changeNose={moodData.changeNose} />
                    })}
                </View>
                <Text style={styles.text}>Skintone and lip color:</Text>
                <View style={styles.container}>
                    {skinTone.map((item, i) => {
                        return <SkinMenu color={item} key={i} changeSkin={moodData.changeSkin} />
                    })}
                </View>

                <View style={styles.container}>
                    {lipColors.map((item, i) => {
                        return <LipMenu lip={item} key={i} changeLip={moodData.changeLip} />
                    })}
                </View>
            </View>
            <TouchableOpacity style={islandscape ? styles.containerImgLand : styles.containerImg} onPress={toMood}>
                <Image source={noseImg[moodData.nose]}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        zIndex: 1,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                        tintColor: "#000",
                    }} />
                <Image source={moodImg[moodData.mood]}
                    style={{
                        backgroundColor: moodData.skin,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                        tintColor: moodData.lip,

                    }} />
            </TouchableOpacity>
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
        backgroundColor: colors.dark,
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
        paddingLeft: 20,

        marginTop: 0,
        paddingTop: 0,
    },
    text: {
        fontSize: 25,
        color: colors.light,
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 0,
        marginTop: 15,
        marginBottom: 0,
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
        justifyContent: 'center',
        borderColor: colors.primary,
        borderRadius: 30,
        borderWidth: 1,
    },
    containerImgLand: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.dark,
        borderColor: colors.primary,
        borderRadius: 30,
        borderWidth: 1,
        width: '100%',
        height: '100%',
    }
})
