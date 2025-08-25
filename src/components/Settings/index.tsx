import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';

export function Settings() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer} activeOpacity={0.7}>
        <View style={styles.mainOption}>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={32}
            color="#000"
          />
          <Text style={styles.label}>Editar dados pessoais</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} activeOpacity={0.7}>
        <View style={styles.mainOption}>
          <Feather name="settings" size={32} color="#000" />
          <Text style={styles.label}>Configurações</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} activeOpacity={0.7}>
        <View style={styles.mainOption}>
          <MaterialIcons name="no-encryption" size={32} color="#000" />
          <Text style={styles.label}>Alterar Senha</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} activeOpacity={0.7}>
        <View style={styles.mainOption}>
          <MaterialIcons name="output" size={32} color="#000" />
          <Text style={styles.label}>Finalizar sessão</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
