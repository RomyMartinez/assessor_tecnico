import { Tabs } from "expo-router";
import { colors, fontFamily } from "@/theme/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
  Roboto_800ExtraBold,
} from "@expo-google-fonts/roboto";
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Loading } from "@/components/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_600SemiBold,
    Roboto_700Bold,
    Roboto_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary.dark,
        tabBarInactiveTintColor: colors.neutral.white,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: fontFamily.regular,
          top: 4,
          fontSize: 16,
        },
        tabBarStyle: {
          width: "100%",
          height: 80,
          backgroundColor: colors.primary.light,
        },
        tabBarItemStyle: {
          borderRadius: 10,
          paddingVertical: 8,
        },
        tabBarIconStyle: {
          height: 24,
          width: 24,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="requests"
        options={{
          title: "Solicitações",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
