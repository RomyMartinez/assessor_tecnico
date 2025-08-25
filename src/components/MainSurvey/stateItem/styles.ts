import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.light,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  containerActive: {
    backgroundColor: colors.neutral.white,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: colors.neutral.dark,
  },
});
