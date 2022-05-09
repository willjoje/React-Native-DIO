import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfile = 'https://avatars.githubusercontent.com/u/80431390?v=4';
const urlGithub = 'https://github.com/willjoje';

const App = () => {

  const handlePressGithub = async () => {
    console.log('Verificando Link');
    const response = await Linking.canOpenURL(urlGithub);
    if (response) {
      console.log('Link verificado');
      await Linking.openURL(urlGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Will sentado no banco da praça"
          style={style.avatar}
          source={{uri: imageProfile}}
        />
        <Text style={[style.defaultText, style.name]}>Willyam Jorge</Text>
        <Text style={[style.defaultText, style.nickname]}>willjoje</Text>
        <Text style={[style.defaultText, style.description]}>
          CS Student | Web Developer | Casual Gamer
        </Text>

        <Pressable onPress={handlePressGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView> // Protege o componente de sair par uma área que não tem acesso
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    // Column
    backgroundColor: colorGithub,
    flex: 1, // Expande o background para a tela inteira
    justifyContent: 'center', // Alinhamento vertical
    alignItems: 'center', // Alinhamento horizontal
  },

  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },

  defaultText: {
    color: colorFontGithub,
  },

  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },

  nickname: {
    color: colorDarkFontGithub,
    fontSize: 18,
  },

  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },

  textButton: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
