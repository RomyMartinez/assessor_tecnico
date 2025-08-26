import { View, Text, ScrollView } from "react-native";
import { Survey } from "@/types/survey";
import { styles } from "./styles";
import { getDay } from "@/util/date";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme";

type SurveyDescriptionProps = {
  data: Survey;
};

export function SurveyDescription({ data }: SurveyDescriptionProps) {
  const day = getDay(data.schedule.date);
  const [year, month, dayNumber] = data.schedule.date.split("-");
  const [hour, minute] = data.schedule.time.split(":");
  const isMorning = Number(hour) < 12;
  const time = isMorning ? "Manhã" : "Tarde";

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16 }}
    >
      <View style={[styles.contentContainer, { gap: 8 }]}>
        <Text style={styles.title}>Visita Agendada</Text>
        <View style={styles.date}>
          <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
            <MaterialIcons
              name="calendar-month"
              size={16}
              color={colors.neutral.dark}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textMedium}>
                {dayNumber}/{month}/{year} -{" "}
                <Text style={styles.textRegular}>{day}</Text>
              </Text>
            </View>
          </View>
          <Text style={styles.textMedium}>
            Turno: <Text style={styles.textRegular}>{time}</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.contentContainer, { gap: 8 }]}>
        <View style={{ gap: 8 }}>
          <Text style={styles.title}>Descrição</Text>
          <Text style={styles.textDescription}>{data.data.description}</Text>
        </View>
      </View>
      <View style={[styles.contentContainer, { gap: 8 }]}>
        <Text style={styles.title}>Dados do Beneficiário</Text>
        <Text style={styles.textBold}>{data.data.name}</Text>
        <Text style={styles.textRegular}>{data.data.location}</Text>
        <Text style={styles.textMedium}>
          Telefone: <Text style={styles.textRegular}>{data.data.phone}</Text>
        </Text>
      </View>
    </ScrollView>
  );
}
