import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

type MainButtonsProps = {
  label: string;
  numberNotifications?: number;
};

export function MainButtons({ label, numberNotifications }: MainButtonsProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.numberNotifications}>{numberNotifications}</Text>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
