import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

 
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';
import SignupScreen from './screens/SignupScreen';

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();


const App = () => {

 return (
   <NavigationContainer>
     <Stack.Navigator
     screenOptions={{
       headerStyle:{
          backgroundColor: '#39CCCC',

       },
     }}>
       <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
       <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
       <Stack.Screen name={'InfoScreen'} component={InfoScreen} />
       <Stack.Screen name={'SignupScreen'} component={SignupScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );

}

export default App;
