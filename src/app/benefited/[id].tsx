import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { colors, fontFamily } from '@/theme';
import { surveys } from '@/util/data';
import NotFound from '@/components/NotFound';
import { BackButton } from '@/components/BackButton';
import { SurveyDescription } from '@/components/SurveyDescription';

export default function Benefited() {
  const { id } = useLocalSearchParams();

  const survey = surveys.find((item) => item.id === `#${id}`);

  if (!survey) {
    return <NotFound />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.light,
        paddingVertical: 80,
        paddingHorizontal: 16,
      }}
    >
      <View>
        <BackButton />
        <Text
          style={{
            fontSize: 40,
            fontFamily: fontFamily.extraBold,
            color: colors.primary.light,
            textAlign: 'center',
          }}
        >
          #{id}
        </Text>
      </View>
      <SurveyDescription data={survey} />
    </View>
  );
}
