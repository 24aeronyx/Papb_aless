import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000); // Splash screen akan tampil selama 2 detik

    return () => clearTimeout(timer); // Membersihkan timer ketika komponen di-unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My To-Do App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  text: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
