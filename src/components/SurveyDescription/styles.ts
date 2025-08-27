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
    justifyContent: "space-between",
    alignItems: "center",
  },
  textBold: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: colors.neutral.dark,
  },
  textMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.neutral.dark,
  },
  textRegular: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.neutral.dark,
  },
  textSmall: {
    lineHeight: 16,
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.neutral.dark_gray,
  },
  image: {
    width: "100%",
    height: 162,
    borderRadius: 20,
  },
  statusContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 80,
    borderRadius: 20,
  },
  statusItem: {
    width: 10,
    alignSelf: "center",
    height: 10,
    borderRadius: 20,
    backgroundColor: colors.secondary.hover,
  },
  statusItemIcon: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: colors.secondary.hover,
    alignItems: "center",
    justifyContent: "center",
  },
  statusBar: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textDescription: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.neutral.dark,
  },
});
