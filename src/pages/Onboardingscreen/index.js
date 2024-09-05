import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  const completeOnboarding = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.replace('Home'); // Langsung ke Home setelah onboarding selesai
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My To-Do App!</Text>
      <Text style={styles.description}>This app helps you manage your tasks effectively.</Text>
      <Button title="Get Started" onPress={completeOnboarding} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default OnboardingScreen;
