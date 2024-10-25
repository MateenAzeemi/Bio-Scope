import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import Hello from './screens/Hello';
import ProfileScreen from './screens/ProfileScreen';
import QuizzesScreen from './screens/QuizzesScreen';
import ModelsScreen from './screens/ModelsScreen';
import AboutScreen from './screens/AboutScreen';
import SideBar from './screens/SideBarScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev); // Toggle sidebar visibility
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // setIsSidebarVisible(true);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    const originalWarn = console.warn;

    console.warn = (...args) => {
      if (args[0].includes('Non-serializable values were found in the navigation state')) {
        // Suppress this specific warning
        return;
      }
      originalWarn(...args); // Call the original console.warn for other warnings
    };

    // Clean up the console.warn override when component unmounts
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {isSidebarVisible && <SideBar closeSidebar={closeSidebar} />}
        {isLoggedIn && (
          <TouchableOpacity style={styles.hamburgerButton} onPress={toggleSidebar}>
            {isSidebarVisible ? null : (
            <Icon name="menu" size={30} color="#008080" />
          )}
          </TouchableOpacity>
        )}
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen 
            name="WelcomeScreen" 
            component={WelcomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ headerShown: false }}
            initialParams={{ onLogin: handleLogin }} // Keep this line
          />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Hello" component={Hello} options={{ headerShown: false }} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Quizzes" component={QuizzesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Models" component={ModelsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  hamburgerButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1000,
  },
});

export default App;
