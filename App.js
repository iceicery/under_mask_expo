import React, { useState } from 'react';
import { moodContext } from './contexts/moodContext';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Mood from './components/Mood';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
    <moodContext.Provider value={{ changeMood, changeSkin, changeLip, mood, skin, lip }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Mood" component={Mood} />
        </Stack.Navigator>
      </NavigationContainer>
    </moodContext.Provider>
  );
}


