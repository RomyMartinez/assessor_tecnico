import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 687,
    paddingTop: 80,
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.medium,
    color: colors.neutral.dark,
  },
  buttonContainer: {
    padding: 0,
    gap: 20,
  },
});
