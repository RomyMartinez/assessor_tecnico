import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme/index';

export const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: fontFamily.extraBold,
    color: colors.neutral.dark,
    textAlign: 'center',
    width: '100%',
  },
});
