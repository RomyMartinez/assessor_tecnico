import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { colors } from '@/theme/color';
import { useState } from 'react';

export function Input() {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color={colors.primary.light}
        />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor={colors.primary.light}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <TouchableOpacity
        style={styles.filter}
        activeOpacity={0.6}
        onPress={() => {
          setSearchText('');
        }}
      >
        <MaterialCommunityIcons
          name="filter-outline"
          size={24}
          color={colors.primary.light}
        />
      </TouchableOpacity>
    </View>
  );
}
