import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  textContainer: {
    gap: 8,
    alignItems: 'center',
  },
  imageContainer: {
    height: 120,
    width: 120,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: 'hidden',
  },
  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary.light,
    borderRadius: 20,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: fontFamily.medium,
    fontSize: 28,
    color: colors.neutral.dark,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.primary.dark,
  },
});
