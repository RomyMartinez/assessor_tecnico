import { View, Text } from 'react-native';
import { colors } from '@/theme';
import { ProfilePicture } from '@/components/ProfilePicture';
import { Settings } from '@/components/Settings';

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background.light,
        paddingTop: 104,
        gap: 80,
      }}
    >
      <ProfilePicture
        data={{
          name: 'Arthur Gonçalves',
          src: require('../../../assets/dc49bac5004484664d96aece63f7a26376eadf2c.jpg'),
        }}
      />
      <Settings />
    </View>
  );
}
