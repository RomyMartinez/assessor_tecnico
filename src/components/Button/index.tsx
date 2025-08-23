import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  type ColorValue,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme/color";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  isLoading?: boolean;
  secondary?: boolean;
  icon?: {
    name: keyof typeof MaterialIcons.glyphMap;
    color: ColorValue;
  };
};

export function Button({
  label,
  isLoading,
  icon,
  secondary = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        secondary ? styles.secondary : styles.primary,
        icon && {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.secondary.light} />
      ) : (
        <>
          <Text
            style={[
              styles.label,
              secondary
                ? { color: colors.primary.light }
                : { color: colors.neutral.white },
            ]}
          >
            {label}
          </Text>
          {icon && (
            <MaterialIcons name={icon.name} size={24} color={icon.color} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}
