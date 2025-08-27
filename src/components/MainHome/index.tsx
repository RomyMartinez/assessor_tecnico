import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { colors } from "@/theme/color";
import { Separator } from "../Separator";
import { Carousel, Item } from "../Carousel";
import { MainButtons } from "./MainButtons";
import { Agenda } from "./Agenda";

export function MainHome() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <MainButtons label="Visitas para hoje" numberNotifications={3} />
          <MainButtons label="Solicitações Pendentes" numberNotifications={8} />
        </View>
        <View style={styles.buttonRow}>
          <MainButtons label="Aguardando Retorno" numberNotifications={5} />
          <MainButtons
            label="Solicitações Concluídas"
            numberNotifications={10}
          />
        </View>
      </View>
      <Separator color={colors.neutral.regular_gray} />
      <Agenda />
    </View>
  );
}
