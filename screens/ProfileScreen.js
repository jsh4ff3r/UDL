import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, ScrollView } from 'react-native';
import { AuthContext } from './AuthContext';

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [address, setAddress] = useState(user?.address || '');
  const [password, setPassword] = useState('');

  const handleUpdate = () => {
    Alert.alert('Success', 'Your profile has been updated.');
    // Normally here you would send updated info to a backend API
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile & Account Settings</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        placeholder="Service Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        placeholder="Change Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Update Profile" onPress={handleUpdate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    marginBottom: 16,
    borderRadius: 6,
    fontSize: 16,
  },
});