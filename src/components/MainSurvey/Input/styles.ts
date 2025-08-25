import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 68,
    gap: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 8,
    borderColor: colors.primary.light,
    backgroundColor: colors.neutral.white,
    borderRadius: 20,
  },
  input: {
    height: 68,
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
  filter: {
    borderWidth: 2,
    padding: 20,
    gap: 10,
    borderColor: colors.primary.light,
    backgroundColor: colors.neutral.white,
    borderRadius: 20,
  },
});
