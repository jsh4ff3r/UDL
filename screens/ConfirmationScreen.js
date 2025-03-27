import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConfirmationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.subtitle}>Your lawn service has been booked.</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Login')} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});