import { View, ColorValue } from 'react-native';
import { styles } from '../Loading/styles';
import { colors } from '@/theme/color';

export function Separator({ color }: { color: ColorValue }) {
  return <View style={{ height: 1, width: '100%', backgroundColor: color }} />;
}
