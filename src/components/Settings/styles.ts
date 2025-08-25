import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral.white,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  mainOption: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 36,
  },
  label: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.neutral.dark,
  },
});
