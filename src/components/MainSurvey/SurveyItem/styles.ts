import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.primary.light,
    borderRadius: 20,
    padding: 16,
    gap: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateTimeText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.neutral.dark,
  },
  id: {
    fontSize: 24,
    fontFamily: fontFamily.medium,
    color: colors.neutral.dark,
  },
  name: {
    fontSize: 18,
    fontFamily: fontFamily.medium,
    color: colors.neutral.dark,
  },
  request: {
    width: 150,
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 17,
    borderRadius: 20,
    borderWidth: 2,
  },
  requestBenefited: {
    borderColor: colors.primary.light,
    backgroundColor: colors.system.alert,
  },
  requestDonor: {
    borderColor: colors.secondary.light,
    backgroundColor: colors.secondary.hover,
  },
  requestText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.neutral.dark,
  },
});
