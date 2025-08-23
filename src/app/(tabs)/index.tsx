import { View, Text } from 'react-native';
import { colors } from '@/theme/color';
import { PageHeader } from '@/components/PageHeader';
import { MainHome } from '@/components/MainHome';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.light,
      }}
    >
      <PageHeader />
      <MainHome />
    </View>
  );
}
