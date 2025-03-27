import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookingScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [bushTrim, setBushTrim] = useState(false);
  const [yardCleanup, setYardCleanup] = useState(false);

  const address = "Service address from signup (placeholder)";

  const handleBooking = () => {
    Alert.alert(
      "Booking Confirmed",
      `You selected:\n\n- Mowing ($40)\n${bushTrim ? "- Bush Trimming\n" : ""}${yardCleanup ? "- Yard Cleanup\n" : ""}- Date: ${selectedDate.toDateString()}`,
      [{ text: "OK", onPress: () => navigation.navigate("Payment") }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Mowing Service</Text>

      <Text style={styles.label}>Service Address:</Text>
      <Text style={styles.value}>{address}</Text>

      <Text style={styles.label}>Flat Rate: $40</Text>

      <View style={styles.checkboxContainer}>
        <CheckBox value={bushTrim} onValueChange={setBushTrim} />
        <Text style={styles.checkboxLabel}>Add Bush Trimming</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={yardCleanup} onValueChange={setYardCleanup} />
        <Text style={styles.checkboxLabel}>Add Yard Cleanup</Text>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Button title="Select Service Date" onPress={() => setShowDatePicker(true)} />
        <Text style={{ marginTop: 10 }}>Selected: {selectedDate.toDateString()}</Text>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setSelectedDate(date);
            }}
          />
        )}
      </View>

      <Button title="Continue to Payment" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontWeight: "bold",
    marginTop: 15,
  },
  value: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});

export default BookingScreen;