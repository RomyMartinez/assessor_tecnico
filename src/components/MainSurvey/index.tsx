import { View, Text } from 'react-native';
import { styles } from './styles';
import { StateItem } from './stateItem';
import { useState } from 'react';
import { Input } from './Input';
import { List } from '@/components/List';
import SurveyItem from './SurveyItem';
import { surveys } from '@/util/data';

const stateItems = [
  { label: 'Ativas', value: 'active' },
  { label: 'Finalizadas', value: 'completed' },
  { label: 'Canceladas', value: 'canceled' },
];

type MainSurveyProps = {
  surveyType: string;
};

export const MainSurvey = ({ surveyType }: MainSurveyProps) => {
  const [activeState, setActiveState] = useState('active');

  const filteredByType = surveys.filter(
    (survey) => survey.type === surveyType || surveyType === 'Todas'
  );
  const filteredByState = filteredByType.filter(
    (survey) => survey.state === activeState
  );

  return (
    <View style={styles.container}>
      <View style={styles.stateContainer}>
        {stateItems.map((item) => (
          <StateItem
            key={item.value}
            label={item.label}
            isActive={activeState === item.value}
            onPress={() => setActiveState(item.value)}
          />
        ))}
      </View>
      <View
        style={[
          styles.containerList,
          activeState === 'active' && styles.borderAtivas,
          activeState === 'completed' && styles.borderFinalizadas,
          activeState === 'canceled' && styles.borderCanceladas,
        ]}
      >
        <Input />
        <List
          containerStyle={{
            flex: 1,
            width: '100%',
          }}
          listContentStyle={{
            gap: 10,
          }}
          emptyMessage="Nenhuma Solicitação encontrada"
          data={filteredByState}
          renderItem={({ item }) => <SurveyItem data={item} />}
        />
      </View>
    </View>
  );
};
