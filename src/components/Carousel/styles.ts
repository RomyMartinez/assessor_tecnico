import { colors, fontFamily } from '@/theme/index';
import { StyleSheet } from 'react-native';
import { Button } from '../Button';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 16,
    padding: 0,
  },
  containerItem: {
    width: '100%',
    flexDirection: 'column',
    height: 188,
    borderRadius: 20,
    padding: 16,
    overflow: 'hidden',
    gap: 2,
  },

  image: {
    width: '100%',
    height: 188,
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  textOverlay: {
    justifyContent: 'flex-end',
    zIndex: 4,
    gap: 8,
  },

  ImageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 3,
    backgroundColor: colors.neutral.dark,
    borderRadius: 20,
    opacity: 0.8,
  },

  description: {
    fontFamily: fontFamily.regular,
    fontSize: 18,
    color: colors.neutral.white,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 8,
  },

  linkText: {
    color: colors.system.link,
    fontSize: 14,
    fontWeight: '600',
  },

  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginTop: 16,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    zIndex: 5,
  },

  buttonRight: {
    backgroundColor: colors.neutral.light_gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    height: 24,
    width: 24,
  },

  buttonLeft: {
    backgroundColor: colors.neutral.light_gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    height: 24,
    width: 24,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.neutral.light_gray,
    opacity: 0.5,
  },

  dotActive: {
    backgroundColor: colors.neutral.dark,
    opacity: 1,

    borderRadius: 5,
  },
});
