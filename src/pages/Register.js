import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//Logo
import Logo from '../components/Logo';

//Cores
import colors from '../styles/colors';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.viewSuperior}>
        <Logo />
      </View>
      <View style={styles.viewMeio}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor={colors.rosa}
          autoCompleteType="email"
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Usuário"
          placeholderTextColor={colors.rosa}
          autoCompleteType="username"
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Estado"
          placeholderTextColor={colors.rosa}
          //autoCompleteType=''
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Cidade"
          placeholderTextColor={colors.rosa}
          //autoCompleteType=''
        />
      </View>
      <View style={styles.viewInferior}>
        <TouchableOpacity
          onPress={() => alert('Botão Cadastrar')}
          style={{
            backgroundColor: colors.rosa,
            marginTop: 18,
            borderRadius: 24,
            justifyContent: 'center',
            alignItems: 'center',
            height: 48,
            width: '80%',
          }}>
          <Text style={{color: '#fff', fontSize: 20}}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            height: 48,
            width: '80%',
            marginBottom: 25
          }}>
          <Text style={{color: colors.rosa, fontSize: 15}}>
            Entrar no App
          </Text>
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
    //backgroundColor: '#000',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewInferior: {
    //backgroundColor: colors.rosa,
    marginTop: 50,
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: '#fff',
    borderBottomColor: colors.rosa,
    borderBottomWidth: 2,
    width: '80%',
    color: colors.rosa,
    borderRadius: 2,
    fontSize: 19,
  },
});
