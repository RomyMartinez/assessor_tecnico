import { View, Text } from 'react-native';
import { colors } from '@/theme';
import { BackButton } from '@/components/BackButton';

export default function NotFound() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.light,
        paddingHorizontal: 16,
        paddingVertical: 80,
      }}
    >
      <BackButton />
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          paddingTop: 325,
          justifyContent: 'center',
          color: colors.neutral.dark,
        }}
      >
        Solicitação não encontrada
      </Text>
    </View>
  );
}
