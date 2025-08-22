import { StyleSheet } from 'react-native';
import { colors } from '@/theme/color';
import { fontFamily } from '@/theme/fontFamily';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 148,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.secondary.light,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profile: {
    height: 48,
    width: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  labelsContainer: {
    height: 48,
    gap: 4,
  },
  title: {
    fontFamily: fontFamily.medium,
    color: colors.neutral.white,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    color: colors.secondary.dark,
    fontSize: 14,
  },
  iconContainer: {
    color: colors.neutral.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderRadius: 12,
    padding: 8,
  },
});

export default styles;
