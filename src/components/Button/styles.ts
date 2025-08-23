import { colors } from "@/theme/color";
import { StyleSheet } from "react-native";
import { fontFamily } from "@/theme/fontFamily";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 20,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  primary: {
    backgroundColor: colors.primary.light,
    borderColor: colors.primary.light,
    color: colors.neutral.white,
    boxSizing: "border-box",
    borderWidth: 2,
  },
  label: {
    textAlign: "center",
    fontFamily: fontFamily.regular,
    fontSize: 20,
  },
  secondary: {
    backgroundColor: colors.background.light,
    borderWidth: 2,
    boxSizing: "border-box",
    color: colors.primary.light,
    borderColor: colors.primary.light,
  },
});
