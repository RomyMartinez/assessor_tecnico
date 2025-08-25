import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  survey: {
    borderRadius: 20,
    padding: 8,
    marginLeft: 8,
  },
  surveyActive: {
    backgroundColor: colors.secondary.light,
  },
  surveyInactive: {
    backgroundColor: colors.neutral.whiteOpaque,
    opacity: 1,
  },
  surveyLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
  },
  surveyLabelActive: {
    color: colors.neutral.white,
  },
  surveyLabelInactive: {
    color: colors.neutral.dark_gray,
  },
});
