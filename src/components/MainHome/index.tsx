import { View, Text } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { colors } from '@/theme/color';
import { Separator } from '../Separator';
import { Carousel, Item } from '../Carousel';

const items: Item[] = [
  {
    id: '1',
    src: require('../../../assets/d067ab2d2b57d2494880fb60e361dac554b8518d.png'),
    description:
      'Famílias são impactadas por novo projeto social que viabiliza obras',
  },
  {
    id: '2',
    src: require('../../../assets/d067ab2d2b57d2494880fb60e361dac554b8518d.png'),
    description:
      'Famílias são impactadas por novo projeto social que viabiliza obras',
  },
  {
    id: '3',
    src: require('../../../assets/d067ab2d2b57d2494880fb60e361dac554b8518d.png'),
    description:
      'Famílias são impactadas por novo projeto social que viabiliza obras',
  },
];

export function MainHome() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>O que deseja fazer?</Text>
        <Button
          label="Atualizar Agenda"
          icon={{
            name: 'add',
            color: colors.neutral.white,
          }}
        />
        <Button
          secondary
          label="Histórico de Solicitações"
          icon={{
            name: 'access-time',
            color: colors.primary.light,
          }}
        />
      </View>
      <Separator color={colors.neutral.regular_gray} />
      <Carousel items={items} />
      <Separator color={colors.neutral.regular_gray} />
    </View>
  );
}
