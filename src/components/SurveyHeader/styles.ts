import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 16,
    alignContent: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: fontFamily.bold,
    color: colors.neutral.dark,
  },
  surveyOptions: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 8,
  },
  surveyTitle: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.neutral.dark,
    opacity: 0.6,
  },
});

export default styles;
