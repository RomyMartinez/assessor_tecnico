import { View } from 'react-native';
import { colors } from '@/theme';
import { BackButton } from '@/components/BackButton';
import {
  NotificationItem,
  NotificationItemProps,
} from '@/components/NotificationItem';
import { StackHeader } from '@/components/StackHeader';
import { List } from '@/components/List';

const todayNotifications: NotificationItemProps[] = [
  {
    title: 'Nova solicitação recebida',
    description: 'Clique para ver detalhes',
    icon: { name: 'calendar-today', color: colors.secondary.light },
  },
  {
    title: 'Nova solicitação recebida',
    description: 'Clique para ver detalhes',
    icon: { name: 'calendar-today', color: colors.secondary.light },
  },
  {
    title: 'Nova solicitação recebida',
    description: 'Clique para ver detalhes',
    icon: { name: 'calendar-today', color: colors.secondary.light },
  },
];

const weekNotifications: NotificationItemProps[] = [
  {
    title: 'Nova obra finalizada',
    description: 'Clique para ver detalhes',
    icon: { name: 'calendar-today', color: colors.primary.light },
  },
  {
    title: 'Nova solicitação recebida',
    description: 'Clique para ver detalhes',
    icon: { name: 'calendar-today', color: colors.secondary.light },
  },
];

export default function Notifications() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.light,
        paddingVertical: 80,
        paddingHorizontal: 16,
      }}
    >
      <BackButton />
      <View style={{ flex: 1, gap: 24 }}>
        <StackHeader title="Notificações" />
        <List
          title="Hoje"
          data={todayNotifications}
          renderItem={({ item }) => <NotificationItem data={item} />}
        />
        <List
          title="Esta semana"
          data={weekNotifications}
          renderItem={({ item }) => <NotificationItem data={item} />}
        />
      </View>
    </View>
  );
}
