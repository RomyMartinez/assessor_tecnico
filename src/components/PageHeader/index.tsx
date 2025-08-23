import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme/color';

export function PageHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../assets/dc49bac5004484664d96aece63f7a26376eadf2c.jpg')}
          style={styles.profile}
        />
        <View style={styles.labelsContainer}>
          <Text style={styles.title}>Olá, Arthur!</Text>
          <Text style={styles.subtitle}>Assessor Técnico</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons
            name="support-agent"
            size={32}
            color={colors.secondary.dark}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons
            name="notifications"
            size={32}
            color={colors.secondary.dark}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
