import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import BookingScreen from './screens/BookingScreen';
import CalendarScreen from './screens/CalendarScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="Booking"
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen name="Booking" component={BookingScreen} />
      <Drawer.Screen name="Schedule" component={CalendarScreen} />
      <Drawer.Screen name="Profile & Settings" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Main" component={DrawerMenu} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}