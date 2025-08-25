import { View, Text } from 'react-native';
import { colors } from '@/theme';
import { useState } from 'react';
import { MainSurvey } from '@/components/MainSurvey';
import { SurveyHeader } from '@/components/SurveyHeader';

export default function Requests() {
  const [selectedSurvey, setSelectedSurvey] = useState('Todas');

  function onPress(label: string) {
    setSelectedSurvey(label);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.light,
        paddingTop: 80,
        paddingHorizontal: 16,
        gap: 16,
      }}
    >
      <SurveyHeader surveyType={selectedSurvey} onPress={onPress} />
      <MainSurvey surveyType={selectedSurvey} />
    </View>
  );
}
