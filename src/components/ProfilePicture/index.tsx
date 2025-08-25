import {
  View,
  Image,
  type ImageRequireSource,
  type ImageSourcePropType,
  TouchableOpacity,
  Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '@/theme';

export type ProfileProps = {
  name: string;
  src: ImageSourcePropType;
};

interface ProfilePictureProps {
  data: ProfileProps;
}

export function ProfilePicture({ data }: ProfilePictureProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={data.src} style={styles.image} />
        <TouchableOpacity style={styles.badge} activeOpacity={0.8}>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={24}
            color={colors.neutral.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>Accessor Técnico</Text>
      </View>
    </View>
  );
}
