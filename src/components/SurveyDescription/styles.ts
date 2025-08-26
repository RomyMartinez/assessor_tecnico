import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.medium,
    color: colors.primary.light,
  },
  contentContainer: {
    width: "100%",
    borderWidth: 2,
    borderColor: colors.primary.light,
    padding: 16,
    borderRadius: 20,
  },
  date: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  textBold: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: colors.neutral.dark,
  },
  textMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    color: colors.neutral.dark,
  },
  textRegular: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.neutral.dark,
  },

  textDescription: {
    fontFamily: fontFamily.regular,
    fontSize: 18,
    color: colors.neutral.dark,
  },
});
