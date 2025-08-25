import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type StateItemProps = TouchableOpacityProps & {
  label: string;
  isActive?: boolean;
};

export const StateItem = ({ label, isActive, ...props }: StateItemProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={1}
      style={isActive ? styles.containerActive : styles.container}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
