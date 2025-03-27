import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Upcoming Lawn Service</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#4CAF50',
          },
        }}
        style={styles.calendar}
      />
      {selectedDate && (
        <Text style={styles.info}>
          Your next service is on {selectedDate}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
  },
  info: {
    marginTop: 20,
    fontSize: 18,
    color: '#555',
  },
});