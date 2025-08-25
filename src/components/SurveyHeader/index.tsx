import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { SurveyItem } from './SurveyItem';

interface SurveyHeaderProps {
  onPress: (label: string) => void;
  surveyType: string;
}

const types = ['Todas', 'Beneficiado', 'Doador', 'Coleta'];

export function SurveyHeader({ onPress, surveyType }: SurveyHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitações</Text>
      <View style={styles.surveyOptions}>
        <Text style={styles.surveyTitle}>Vistoria</Text>
        <FlatList
          data={types}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <SurveyItem
              label={item}
              active={surveyType === item}
              onPress={() => onPress(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
