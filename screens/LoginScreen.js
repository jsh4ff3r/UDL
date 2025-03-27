import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleLogin = () => {
    // Later: Add real auth here
    navigation.replace('Main');
  };

  const handleSignup = () => {
    // You can link to the signup screen with prefilled info
    navigation.navigate('Signup', {
      name,
      email,
      phone,
      address,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Undefeated Landscaping</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Service Address"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />

      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.or}>or</Text>
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
    borderBottomWidth: 1,
    padding: 8,
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default LoginScreen;