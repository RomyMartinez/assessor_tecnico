import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  stateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerList: {
    flex: 1,
    backgroundColor: colors.neutral.white,
    paddingVertical: 22,
    paddingHorizontal: 16,
    gap: 10,
  },
  borderAtivas: {
    borderTopEndRadius: 22,
  },
  borderFinalizadas: {
    borderTopEndRadius: 22,
    borderTopStartRadius: 22,
  },
  borderCanceladas: {
    borderTopStartRadius: 22,
  },
});
