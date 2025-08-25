import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Survey } from '@/types/survey';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme';
import { router } from 'expo-router';

type SurveyItemProps = {
  data: Survey;
};

export default function SurveyItem({ data }: SurveyItemProps) {
  const { id } = data;
  const formatId = id.split('#');
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => router.navigate(`/benefited/${formatId[1]}`)}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.id}>{data.id}</Text>
        <View style={styles.dateTime}>
          <Text style={styles.dateTimeText}>
            {data.schedule.date} - {data.schedule.time}
          </Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={colors.neutral.dark}
          />
        </View>
      </View>
      <Text style={styles.name}>{data.data.name}</Text>
      <View
        style={[
          styles.request,
          data.type === 'Beneficiado' && styles.requestBenefited,
          data.type === 'Doador' && styles.requestDonor,
        ]}
      >
        <Text style={styles.requestText}>Vista Agendada</Text>
      </View>
    </TouchableOpacity>
  );
}
