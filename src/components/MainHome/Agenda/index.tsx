import { View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme/color";

const days = ["D", "S", "T", "Q", "Q", "S", "S"];
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export function Agenda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda Mensal</Text>
      <View style={styles.calendarContainer}>
        <View style={styles.calendarHeader}>
          <MaterialIcons
            name="chevron-left"
            size={24}
            color={colors.primary.light}
          />
          <Text style={styles.calendarHeaderText}>Agosto/2025</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={colors.primary.light}
          />
        </View>
        <View style={styles.calendarDays}>
          {days.map((day, index) => (
            <View style={styles.calendarWeek} key={index}>
              <Text key={index} style={styles.calendarDayText}>
                {day}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
