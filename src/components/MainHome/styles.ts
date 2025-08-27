import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/theme/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 687,
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 16,
  },
  button: {
    borderRadius: 20,
    padding: 24,
    backgroundColor: colors.primary.light,
    width: "50%",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.neutral.white,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.medium,
    color: colors.neutral.dark,
  },
  buttonContainer: {
    width: "100%",
    padding: 0,
    gap: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
