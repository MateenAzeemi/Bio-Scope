import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LoginStyle from '../styles/LoginStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const LoginScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.100.13:8083/login-User', {
        email: username, // Assuming username is actually an email
        password: password,
      });

      if (response.data.status === 'ok') {
        Alert.alert('Success', 'Login successful');
        route.params.onLogin(); // Call the onLogin function
        navigation.navigate('Hello');
      } else {
        Alert.alert('Error', response.data.data || 'Login failed');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during login');
    }
  };

  return (
    <View style={LoginStyle.container}>
      <Image
        source={require('../assets/image.png')}
        style={LoginStyle.backgroundImage}
      />

      <View style={LoginStyle.overlay}>
        <Text style={LoginStyle.title}>BioScope</Text>
        <Text style={LoginStyle.subtitle}>Unlock the Secrets of the Body</Text>

        <View style={LoginStyle.formContainer}>
          <Text style={LoginStyle.welcome}>WELCOME</Text>
          <Text style={LoginStyle.signInText}>Sign in to your account</Text>

          <View style={LoginStyle.inputContainer}>
            <Ionicons name="person" size={24} color="#00A19D" style={LoginStyle.icon} />
            <TextInput
              style={LoginStyle.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={LoginStyle.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="#00A19D" style={LoginStyle.icon} />
            <TextInput
              style={LoginStyle.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity>
            <Text style={LoginStyle.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={LoginStyle.signInButton} onPress={handleLogin}>
            <Text style={LoginStyle.signInText}>Sign in</Text>
            <Ionicons name="arrow-forward" size={30} color="black" style={LoginStyle.arrow} />
          </TouchableOpacity>

          <View style={LoginStyle.createAccountContainer}>
            <Text style={LoginStyle.createAccountText}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={LoginStyle.createText}> Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
