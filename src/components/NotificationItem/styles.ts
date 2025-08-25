import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  icon: {
    borderWidth: 2,
    borderColor: colors.secondary.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    height: 71,
    width: 71,
  },
  textContainer: {
    gap: 8,
  },
  title: {
    color: colors.neutral.dark,
    fontFamily: fontFamily.medium,
    fontSize: 20,
  },
  description: {
    color: colors.neutral.dark,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
});
