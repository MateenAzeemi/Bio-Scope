import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SideBarScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} // Replace with the image URL or local path
          style={styles.logo}
        />
        <Text style={styles.logoText}>BIOSCOPE</Text>
      </View>

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem} onPress={(Hello) => navigation.navigate('Home')}>
        <Icon name="home" size={24} color="#008080" />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Quizzes')}>
        <Icon name="quiz" size={24} color="#008080" />
        <Text style={styles.menuText}>Quizzes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Models')}>
        <Icon name="grid-view" size={24} color="#008080" />
        <Text style={styles.menuText}>Models</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('About')}>
        <Icon name="info" size={24} color="#008080" />
        <Text style={styles.menuText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Account')}>
        <Icon name="account-circle" size={24} color="#008080" />
        <Text style={styles.menuText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}>
        <Icon name="logout" size={24} color="#008080" />
        <Text style={styles.menuText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7f7',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008080',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#008080',
  },
});

export default SideBarScreen;
