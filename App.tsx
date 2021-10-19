/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from "./src/screens/Home";
import {Marked} from "./src/screens/Marked";
import {OwnImg} from "./src/screens/OwnImg";

// const Section = () => {
//   return (
//       <SafeAreaView
//           style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text style={{color: 'black'}}>Hello</Text>
//       </SafeAreaView>
//   );
// };

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Marked' component={Marked} />
              <Stack.Screen name='Own' component={OwnImg} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
