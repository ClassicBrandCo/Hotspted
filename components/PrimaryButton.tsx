import { Pressable, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({ label, onPress, style }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#2563eb',
    borderRadius: 12,
    alignItems: 'center',
  },
  label: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
});
