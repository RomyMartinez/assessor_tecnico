import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '@/theme/color';
import { Separator } from '@/components/Separator';

export type NotificationItemProps = {
  title: string;
  description: string;
  icon: {
    name: keyof typeof MaterialIcons.glyphMap;
    color: string;
  };
};

type NotificationProps = {
  data: NotificationItemProps;
};

export function NotificationItem({ data }: NotificationProps) {
  const { title, description, icon } = data;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon}>
          <MaterialIcons name={icon.name} color={icon.color} size={32} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Separator color={colors.neutral.light_gray} />
    </>
  );
}
