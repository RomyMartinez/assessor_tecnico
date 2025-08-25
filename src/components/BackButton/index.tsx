import { View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme/color';
import { router } from 'expo-router';

export function BackButton() {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="close"
        size={32}
        color={colors.neutral.medium_gray}
        onPress={() => router.back()}
      />
    </View>
  );
}
