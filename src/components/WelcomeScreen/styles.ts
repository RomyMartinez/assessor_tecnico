import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 488,
    width: "100%",
    backgroundColor: colors.background.light,
    paddingTop: 40,
    gap: 32,
    paddingHorizontal: 20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingBottom: 72,
  },
  welcomeHeader: {
    alignItems: "center",
    gap: 16,
  },
  welcomeTextContainer: {
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontFamily: fontFamily.extraBold,
    fontSize: 38,
    color: colors.neutral.black,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.neutral.black,
    textAlign: "center",
  },
  enterContainer: {
    gap: 16,
  },
  helpText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.neutral.dark_gray,
    textAlign: "center",
  },
  linkText: {
    color: colors.system.link,
  },
});
