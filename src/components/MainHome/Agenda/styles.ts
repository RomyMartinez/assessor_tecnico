import { StyleSheet } from "react-native";
import { colors } from "@/theme/color";
import { fontFamily } from "@/theme/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.medium,
  },
  calendarContainer: {
    width: "100%",
    flex: 1,
    borderWidth: 2,
    alignItems: "center",
    borderColor: colors.primary.light,
    backgroundColor: colors.neutral.white,
    borderRadius: 16,
    padding: 20,
    gap: 16,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  calendarHeaderText: {
    fontSize: 20,
    fontFamily: fontFamily.regular,
    color: colors.primary.light,
  },
  calendarWeek: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  calendarDayText: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: fontFamily.regular,
    color: colors.neutral.dark,
  },
  calendarDays: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
