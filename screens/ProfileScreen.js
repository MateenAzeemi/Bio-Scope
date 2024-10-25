import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const ProfileScreen = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState({
    username: false,
    password: false,
  });
  const [loading, setLoading] = useState(true);

  // Fetch user data from the backend on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://192.168.100.13:8083/userdata/<user14437>'
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        Alert.alert('Error', 'Failed to load profile data.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = async () => {
    try {
      await axios.put('http://192.168.100.13:8083/update-user<user14437>', user); //dal idhr bhi backend url
      Alert.alert('Profile Saved', 'Your profile has been updated!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile.');
    }
  };

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [{ text: 'Cancel' }, { text: 'Delete', style: 'destructive' }]
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* Username Field */}
      <View style={styles.field}>
        <Text style={styles.label}>Username:</Text>
        {isEditing.username ? (
          <TextInput
            style={styles.input}
            value={user.username}
            onChangeText={(text) => setUser({ ...user, username: text })}
          />
        ) : (
          <Text style={styles.value}>{user.username}</Text>
        )}
        <TouchableOpacity onPress={() => handleEdit('username')}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Password Field */}
      <View style={styles.field}>
        <Text style={styles.label}>Password:</Text>
        {isEditing.password ? (
          <TextInput
            style={styles.input}
            value={user.password}
            secureTextEntry
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        ) : (
          <Text style={styles.value}>********</Text> // Masked password
        )}
        <TouchableOpacity onPress={() => handleEdit('password')}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Email Field */}
      <View style={styles.field}>
        <Text style={styles.label}>E-Mail:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.reportButton} onPress={handleSave}>
        <Text style={styles.reportText}>Save</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Delete Account Button */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3ecff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 18,
  },
  value: {
    flex: 2,
    fontSize: 16,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  editButton: {
    color: '#007BFF',
    marginLeft: 10,
    fontSize: 16,
  },
  reportButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  reportText: {
    color: '#fff',
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#FF9800',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#F44336',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileScreen;
