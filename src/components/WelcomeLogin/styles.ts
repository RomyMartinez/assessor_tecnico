import { colors } from "@/theme/color";
import { fontFamily } from "@/theme/fontFamily";
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
  titleContainer: {
    paddingHorizontal: 20,
    gap: 16,
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.extraBold,
    fontSize: 30,
    color: colors.neutral.black,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 18,
    color: colors.neutral.black,
    textAlign: "center",
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    height: 64,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.system.inactive,
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
