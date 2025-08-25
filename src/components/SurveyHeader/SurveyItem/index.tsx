import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type SurveyItemProps = TouchableOpacityProps & {
  label: string;
  active?: boolean;
};

export function SurveyItem({
  label,
  active = false,
  ...rest
}: SurveyItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.survey,
        active ? styles.surveyActive : styles.surveyInactive,
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.surveyLabel,
          active ? styles.surveyLabelActive : styles.surveyLabelInactive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
