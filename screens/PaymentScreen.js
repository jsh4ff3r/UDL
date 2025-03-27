import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Screen</Text>
      <Text style={styles.subtitle}>Stripe integration coming soon.</Text>
      <Text style={styles.info}>You will be able to securely pay your $40 mowing fee here.</Text>

      <Button
        title="Back to Schedule"
        onPress={() => navigation.navigate('Schedule')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default PaymentScreen;