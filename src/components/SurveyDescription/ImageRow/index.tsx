import { View, type ImageSourcePropType } from "react-native";
import { SurveyDescriptionImage } from "../Image";
import { styles } from "./styles";

type SurveyDescriptionImageRowProps = {
  images: ImageSourcePropType[];
};

export function SurveyDescriptionImageRow({
  images,
}: SurveyDescriptionImageRowProps) {
  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <SurveyDescriptionImage key={index} image={image} />
      ))}
    </View>
  );
}
