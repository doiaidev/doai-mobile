import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//Cores
import colors from '../styles/colors';

//Logo
import Logo from '../components/Logo';

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.rosa} barStyle="light-content" />
      <View style={styles.viewSuperior}>
        <Logo height={83} width={180} />
      </View>
      <View style={styles.viewMeio}>
        <TextInput
          style={{
            backgroundColor: '#fff',
            borderBottomColor: colors.rosa,
            borderBottomWidth: 2,
            width: '80%',
            color: colors.rosa,
            borderRadius: 2,
            fontSize: 19,
          }}
          placeholder="Usuário"
          placeholderTextColor={colors.rosa}
          autoCompleteType="username"
        />
        <TextInput
          style={{
            marginTop: 60,
            backgroundColor: '#fff',
            borderBottomColor: colors.rosa,
            borderBottomWidth: 2,
            width: '80%',
            color: colors.rosa,
            borderRadius: 2,
            fontSize: 19,
          }}
          placeholder="Senha"
          placeholderTextColor={colors.rosa}
          autoCompleteType="password"
        />
      </View>
      <View style={styles.viewInferior}>
        <TouchableOpacity
          onPress={() => alert('Botão Entrar')}
          style={{
            backgroundColor: colors.rosa,
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            height: 48,
            width: '80%',
          }}>
          <Text style={{color: '#fff', fontSize: 20}}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Botão esqueceu sua senha')}
          style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            height: 48,
            width: '80%',
          }}>
          <Text style={{color: colors.rosa, fontSize: 18}}>
            Esqueceu a sua senha?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Botão cadastrar')}
          style={{
            backgroundColor: '#fff',
            borderColor: colors.rosa,
            borderWidth: 2,
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            height: 48,
            width: '80%',
          }}>
          <Text style={{color: colors.rosa, fontSize: 20}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewSuperior: {
    height: '35%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewMeio: {
    height: '30%',
    alignItems: 'center',
  },
  viewInferior: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
