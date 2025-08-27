import { View, Image } from "react-native";
import { styles } from "./styles";

export function WelcomeHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/ilustras.png")}
        style={{ height: 510, width: 475, opacity: 0.3 }}
      />
    </View>
  );
}
