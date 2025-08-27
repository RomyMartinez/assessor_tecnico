import { Image, ImageSourcePropType } from "react-native";
import { styles } from "./styles";

type SurveyDescriptionImageProps = {
  image: ImageSourcePropType;
};

export function SurveyDescriptionImage({ image }: SurveyDescriptionImageProps) {
  return <Image source={image} style={styles.image} />;
}
