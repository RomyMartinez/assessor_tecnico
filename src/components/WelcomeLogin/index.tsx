import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { colors } from "@/theme/color";
import { useState } from "react";
import { loginData } from "@/util/data";
import { router } from "expo-router";

export function WelcomeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email === loginData.email && password === loginData.password) {
      router.push("/(tabs)");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Acesse sua conta</Text>
        <Text style={styles.subtitle}>
          Insira os dados a seguir para acessar sua conta
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor={colors.system.inactive}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholderTextColor={colors.system.inactive}
        />
      </View>
      <View style={styles.enterContainer}>
        <Button label="Entrar" onPress={handleLogin} />
        <Text style={styles.helpText}>
          Não possui uma conta?{" "}
          <Text style={styles.linkText}>Faça o seu Cadastro</Text>
        </Text>
      </View>
    </View>
  );
}
