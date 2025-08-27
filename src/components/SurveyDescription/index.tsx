import { View, Text, ScrollView, Image } from "react-native";
import { Survey } from "@/types/survey";
import { styles } from "./styles";
import { getDay } from "@/util/date";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme";
import { SurveyDescriptionImageRow } from "./ImageRow";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type SurveyDescriptionProps = {
  data: Survey;
};

export function SurveyDescription({ data }: SurveyDescriptionProps) {
  const dayLower = getDay(data.schedule.date);
  const [year, month, dayNumber] = data.schedule.date.split("-");
  const [hour, minute] = data.schedule.time.split(":");
  const isMorning = Number(hour) < 12;
  const time = isMorning ? "Manhã" : "Tarde";
  const day = dayLower.charAt(0).toUpperCase() + dayLower.slice(1);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16 }}
    >
      <View style={[styles.contentContainer, { gap: 8 }]}>
        <Text style={styles.title}>Visita Agendada</Text>
        <View style={styles.date}>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <MaterialIcons
              name="calendar-today"
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
        <View style={{ gap: 16 }}>
          <Text style={styles.title}>Descrição</Text>
          <Text style={styles.textDescription}>{data.data.description}</Text>
          <SurveyDescriptionImageRow images={data.data.images.slice(0, 3)} />
          <SurveyDescriptionImageRow images={data.data.images.slice(3)} />
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
      <View style={[styles.contentContainer, { gap: 8 }]}>
        <Text style={styles.title}>Localização</Text>
        <Image
          source={require("../../../assets/location.png")}
          style={styles.image}
        />
      </View>
      <View style={[styles.contentContainer, { gap: 8 }]}>
        <Text style={styles.title}>Status</Text>
        <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
          <View style={styles.statusContainer}>
            <View style={styles.statusItem}></View>
            <View style={[styles.statusBar, { flex: 1 }]}>
              <View
                style={{
                  height: 50,
                  width: 2,
                  backgroundColor: colors.secondary.hover,
                  flex: 1,
                }}
              ></View>
            </View>
            <View style={styles.statusItemIcon}>
              <MaterialCommunityIcons
                name="calendar-check"
                size={16}
                color={colors.neutral.white}
              />
            </View>
          </View>
          <View style={{ gap: 32, flex: 1 }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textMedium}>Solicitação Recebida</Text>
                <Text style={styles.textSmall}>
                  {dayNumber}/{month}/{year} - {data.schedule.time}
                </Text>
              </View>
              <Text style={styles.textSmall}>Arthur Gonçalves</Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textMedium}>Visita Agendada</Text>
                <Text style={styles.textSmall}>
                  {dayNumber}/{month}/{year} - {data.schedule.time}
                </Text>
              </View>
              <Text style={styles.textSmall}>
                {dayNumber}/{month}/{year} - Tarde
              </Text>
              <View />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
