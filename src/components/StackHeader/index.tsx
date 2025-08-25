import { Text } from 'react-native';
import { styles } from './styles';

type StackHeaderProps = {
  title: string;
};

export function StackHeader({ title }: StackHeaderProps) {
  return <Text style={styles.title}>{title}</Text>;
}
