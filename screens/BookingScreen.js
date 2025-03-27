import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Switch,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function BookingScreen({ navigation }) {
  const [services, setServices] = useState({
    weekly: false,
    biweekly: false,
    cleanup: false,
    fertilization: false,
    grassSeed: false,
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const toggleService = (service) => {
    setServices({ ...services, [service]: !services[service] });
  };

  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  const futureDate = new Date(today);
  futureDate.setDate(futureDate.getDate() + 30);
  const formattedMax = futureDate.toISOString().split('T')[0];

  const serviceLabels = {
    weekly: 'Weekly Services',
    biweekly: 'Bi-weekly Services',
    cleanup: 'Clean Ups',
    fertilization: 'Fertilization',
    grassSeed: 'Grass Seed',
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Book Your Lawn Service</Text>

        {Object.keys(services).map((service) => (
          <View key={service} style={styles.switchRow}>
            <Text style={styles.label}>{serviceLabels[service]}</Text>
            <Switch
              value={services[service]}
              onValueChange={() => toggleService(service)}
            />
          </View>
        ))}

        <Text style={styles.label}>Select Date</Text>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: '#4CAF50',
            },
          }}
          minDate={formattedToday}
          maxDate={formattedMax}
          hideArrows={false}
          renderArrow={(direction) => (
            <Text style={styles.arrow}>{direction === 'left' ? '<' : '>'}</Text>
          )}
          theme={{
            arrowColor: '#4CAF50',
            textMonthFontWeight: 'bold',
            textMonthFontSize: 18,
          }}
        />

        <View style={styles.autocompleteWrapper}>
          <GooglePlacesAutocomplete
            placeholder="Search Address"
            onPress={(data, details = null) => {
              setAddress(data.description);
            }}
            query={{
              key: 'AIzaSyDLb4dNfk7SwA0YbOaa98unLC99_IjReXM', // ← Your API Key here
              language: 'en',
            }}
            styles={{
              textInput: styles.input,
              container: {
                flex: 0,
                zIndex: 10,
              },
              listView: {
                zIndex: 20,
                elevation: 5,
              },
            }}
            fetchDetails={false}
          />
        </View>

        <TextInput
          placeholder="Additional Notes"
          style={styles.input}
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
        />

        <Button
          title="Continue to Payment"
          onPress={() => navigation.navigate('Pay')}
          color="#4CAF50"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  input: {
    padding: 12,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  arrow: {
    fontSize: 20,
    color: '#4CAF50',
    paddingHorizontal: 12,
  },
  autocompleteWrapper: {
    zIndex: 10,
    marginBottom: 16,
  },
});
