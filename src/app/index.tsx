import { View, Text } from "react-native";
import { colors } from "@/theme";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { WelcomeHeader } from "@/components/WelcomeHeader";
import { useState } from "react";
import { WelcomeLogin } from "@/components/WelcomeLogin";

export default function Index() {
  const [isEnter, setIsEnter] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: colors.secondary.hover }}>
      <WelcomeHeader />
      {isEnter ? (
        <WelcomeLogin />
      ) : (
        <WelcomeScreen onPress={() => setIsEnter(true)} />
      )}
    </View>
  );
}
