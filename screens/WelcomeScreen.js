import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeStyle from '../styles/WelcomeStyle';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={WelcomeStyle.container}>
      <View style={WelcomeStyle.headerContainer}>
        <Text style={WelcomeStyle.title}>BioScope</Text>
        <Text style={WelcomeStyle.subtitle}>Unlock the Secrets of the Body</Text>
        <View style={WelcomeStyle.pagination}>
          <View style={WelcomeStyle.dot} />
          <View style={WelcomeStyle.dot} />
          <View style={WelcomeStyle.dot} />
          <View style={WelcomeStyle.dot} />
        </View>
      </View>

      <Image
        source={require('../assets/image.png')} // Replace with your local image path
        style={WelcomeStyle.anatomyImage}
      />

      <TouchableOpacity style={WelcomeStyle.arrowButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={WelcomeStyle.arrowText}>➔</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;