import { useState } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { useToggle } from '../hooks/useToggle';

export default function Home() {
  const { value: online, toggle } = useToggle(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hotspoted Home</Text>
      <Text style={styles.subtitle}>
        React Native + Expo Router app shell.
      </Text>
      <PrimaryButton label={online ? 'Online' : 'Offline'} onPress={toggle} />
      <Link href="/" style={styles.backLink}>
        Back to landing
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  backLink: {
    marginTop: 24,
    color: '#2563eb',
    fontSize: 16,
  },
});
