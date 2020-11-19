import React, { useState } from 'react';
import { moodContext } from './contexts/moodContext';
import Welcome from './components/Welcome';
import DrawMenu from './components/DrawMenu';
import AnimalMenu from './components/AnimalMenu';
import Animal from './components/Animal';
import Mood from './components/Mood';
import ThemeMenu from './components/ThemeMenu';
import Animate from './components/Animate';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Animated } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [mood, setMood] = useState('Happy');
  const [nose, setNose] = useState('None');
  const [skin, setSkin] = useState('#fff');
  const [lip, setLip] = useState('#000');
  const [animal, setAnimal] = useState('beary');


  function changeMood(mood) {
    setMood(mood);
  }

  function changeNose(nose) {
    setNose(nose);
  }

  function changeSkin(skin) {
    setSkin(skin);
  }
  function changeLip(lip) {
    setLip(lip);
  }

  function changeAnimal(animal) {
    setAnimal(animal);
  }
  return (
    <moodContext.Provider value={{ changeMood, changeNose, changeSkin, changeLip, changeAnimal, mood, nose, skin, lip, animal }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="ThemeMenu" component={ThemeMenu} />
          <Stack.Screen name="DrawMenu" component={DrawMenu} />
          <Stack.Screen name="AnimalMenu" component={AnimalMenu} />
          <Stack.Screen name="Animal" component={Animal} />
          <Stack.Screen name="Mood" component={Mood} />
          <Stack.Screen name="Animate" component={Animate} />
        </Stack.Navigator>
      </NavigationContainer>
    </moodContext.Provider>
  );
}


