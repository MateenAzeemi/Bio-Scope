import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import SignupStyle from '../styles/SignUpStyle';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://192.168.100.13:8083/register', {
        name: username,
        email: email,
        password: password,
      });
      if (response.data.status === 'ok') {
        Alert.alert('Success', 'User created successfully');
      } else {
        Alert.alert('Error', response.data.data || 'Something went wrong');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while creating the user');
    }
  };

  return (
    <View style={SignupStyle.container}>
      <Text style={SignupStyle.title}>BioScope</Text>
      <Text style={SignupStyle.subtitle}>Unlock the Secrets of the Body</Text>
      <Text style={SignupStyle.welcome}>WELCOME</Text>
      {/* Username Input */}
      <TextInput
        style={SignupStyle.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={SignupStyle.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      {/* Email Input */}
      <TextInput
        style={SignupStyle.input}
        placeholder="E-mail"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={SignupStyle.orText}>or</Text>

      {/* Google Sign In Button */}
      <TouchableOpacity style={SignupStyle.googleButton}>
        <Text style={SignupStyle.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={SignupStyle.loginText}>
        have an account?
        <TouchableOpacity onPress={()=> (navigation.navigate('LoginScreen'))}>
        <Text style={SignupStyle.loginLink}>Login</Text>
        </TouchableOpacity>
      </Text>

      {/* Create Account Button */}
      <TouchableOpacity style={SignupStyle.createButton} onPress={handleSignUp}>
        <Text style={SignupStyle.createButtonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
