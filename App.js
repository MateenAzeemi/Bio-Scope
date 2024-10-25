import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import Hello from './screens/Hello';
// import SideBarScreen from './screens/SideBarScreen';
import QuizzesScreen from './screens/QuizzesScreen';
import ModelsScreen from './screens/ModelsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';


const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <SideBarScreen {...props} />} // Use your SideBarScreen
//       screenOptions={{
//         headerShown: false, // Hide header for all screens in the drawer
//       }}>
//       <Drawer.Screen name="Home" component={Hello} />
//       <Drawer.Screen name="Quizzes" component={QuizzesScreen} />
//       <Drawer.Screen name="Models" component={ModelsScreen} />
//       <Drawer.Screen name="About" component={AboutScreen} />
//       <Drawer.Screen name="Account" component={ProfileScreen} />
//       <Drawer.Screen name="Logout" component={LoginScreen} /> {/* Change as needed */}
//     </Drawer.Navigator>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Hello" component={Hello} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        {/* {<Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
