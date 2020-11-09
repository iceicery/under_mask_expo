import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Mood from './components/Mood';


export default function App() {
  const [mood, setMood] = useState('Happy');
  const [skin, setSkin] = useState('#fff');
  const [lip, setLip] = useState('#000');
  function changeMood(mood) {
    setMood(mood);
  }
  function changeSkin(skin) {
    setSkin(skin);
  }
  function changeLip(lip) {
    setLip(lip);
  }
  return (
    <>
      <Menu changeMood={changeMood} changeSkin={changeSkin} changeLip={changeLip} />
      <Mood mood={mood} skin={skin} lip={lip} />
    </>
  );
}


