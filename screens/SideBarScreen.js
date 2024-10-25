// Sidebar.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have this library installed

const Sidebar = ({ navigation, closeSidebar }) => {
  return (
    <View style={styles.sidebarContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={closeSidebar}>
        <Icon name="close" size={30} color="#008080" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('WelcomeScreen'); closeSidebar(); }}>
        <Icon name="home" size={24} color="#008080" />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Quizzes'); closeSidebar(); }}>
        <Icon name="quiz" size={24} color="#008080" />
        <Text style={styles.menuText}>Quizzes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Models'); closeSidebar(); }}>
        <Icon name="grid-view" size={24} color="#008080" />
        <Text style={styles.menuText}>Models</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('About'); closeSidebar(); }}>
        <Icon name="info" size={24} color="#008080" />
        <Text style={styles.menuText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('ProfileScreen'); closeSidebar(); }}>
        <Icon name="account-circle" size={24} color="#008080" />
        <Text style={styles.menuText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => { navigation.navigate('Logout'); closeSidebar(); }}>
        <Icon name="logout" size={24} color="#008080" />
        <Text style={styles.menuText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    zIndex: 1000, // Ensure it overlays above other content
    elevation: 5, // For Android shadow effect
  },
  closeButton: {
    alignSelf: 'flex-end', // Position close button at the top right
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black'
  },
});

export default Sidebar;
