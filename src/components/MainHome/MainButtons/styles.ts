import { StyleSheet } from "react-native";
import { colors } from "@/theme/color";
import { fontFamily } from "@/theme/fontFamily";

export const styles = StyleSheet.create({
  button: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 20,
    padding: 20,
    height: 88,
    backgroundColor: colors.primary.light,
    width: "48%",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.neutral.white,
  },
  numberNotifications: {
    fontSize: 40,
    fontFamily: fontFamily.extraBold,
    color: colors.neutral.white,
  },
});
