import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";

type WelcomeScreenProps = {
  onPress: () => void;
};

export function WelcomeScreen({ onPress }: WelcomeScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeHeader}>
        <Image
          source={require("../../../assets/ilustras.png")}
          style={{ height: 120, width: 120 }}
        />
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.title}>Bem-vindo!</Text>
          <Text style={styles.subtitle}>
            Acesse o banco social de materiais de construção do Reutiliza+
          </Text>
        </View>
      </View>
      <View style={styles.enterContainer}>
        <Button label="Entrar" onPress={onPress} />
        <Text style={styles.helpText}>
          Não possui uma conta?{" "}
          <Text style={styles.linkText}>Faça o seu Cadastro</Text>
        </Text>
      </View>
    </View>
  );
}
