import {
  FlatList,
  FlatListProps,
  StyleProp,
  ViewStyle,
  View,
  Text,
} from 'react-native';

import { styles } from './styles';
import { colors } from '@/theme';
import { Separator } from '../Separator';

type Props<T> = FlatListProps<T> & {
  title?: string;
  emptyMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
  listContentStyle?: StyleProp<ViewStyle>;
};

export function List<T>({
  title,
  emptyMessage,
  containerStyle,
  data,
  renderItem,
  listContentStyle,
  ...rest
}: Props<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          !listContentStyle && styles.listContent,
          listContentStyle,
        ]}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>{emptyMessage}</Text>
        )}
        {...rest}
      />
    </View>
  );
}
