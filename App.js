import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import BookingScreen from './screens/BookingScreen';
import CalendarScreen from './screens/CalendarScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen';
import { AuthProvider } from './screens/AuthContext';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Booking" component={BookingScreen} />
      <Drawer.Screen name="Schedule" component={CalendarScreen} />
      <Drawer.Screen name="Profile & Settings" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Main" component={MainDrawer} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default RootNavigator;