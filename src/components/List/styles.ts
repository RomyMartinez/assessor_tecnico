import { colors, fontFamily } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    gap: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: fontFamily.medium,
    color: colors.neutral.dark,
    marginBottom: 24,
  },
  empty: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.neutral.dark_gray,
    marginTop: 120,
    fontFamily: fontFamily.regular,
  },
});
