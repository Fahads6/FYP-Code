// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './WelcomePage';
import Home from './Home';
import BlurImage from './BlurFromImage';
import BlurVideo from './BlurFromVideo';
import RecordVideo from './RecordAndBlur';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Images" component={BlurImage} />
        <Stack.Screen name="Videos" component={BlurVideo} />
        <Stack.Screen name="Record" component={RecordVideo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;