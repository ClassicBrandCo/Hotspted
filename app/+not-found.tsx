import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function NotFound() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>404 - Page Not Found</Text>
      <Link href="/">← Go Home</Link>
    </View>
  );
}

