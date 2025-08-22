import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/color';

export function Loading() {
  return (
    <ActivityIndicator
      style={styles.container}
      size="large"
      color={colors.secondary.light}
    />
  );
}
