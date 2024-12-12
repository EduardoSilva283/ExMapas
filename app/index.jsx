import { Stack, useRouter } from 'expo-router';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { Styles } from '../src/styles';

// Tema global
const theme = {
  colors: {
    primary: '#000', // Cor principal
    background: '#000', // Cor de fundo
    text: '#000', // Cor do texto
    placeholder: '#000', // Cor do placeholder
  },
};

export default function Home() {
  const router = useRouter();

  const Botao = ({ exercicio }) => (
    <Button
      style={[
        Styles.m("b", 10),
        Styles.button,
      ]}
      icon="clock"
      mode="contained"
      onPress={() => router.push({ pathname: 'ex' + exercicio })}
    >
      {"Exercício " + exercicio}
    </Button>
  );

  return (
    <PaperProvider theme={theme}> {/* Envolvendo o aplicativo no tema global */}
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: 'Home Page',
            headerStyle: { backgroundColor: '#001B48' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: props => (
              <Image
                style={styles.image}
                source={{ uri: 'https://www.uba.mg.leg.br/escola-do-legislativo/apostilas-enem/2019/fisica.png' }}
              />
            ),
          }}
        />
        <Botao exercicio={1} />
        <Botao exercicio={2} />
        <Botao exercicio={3} />
        <Botao exercicio={4} />
        <Botao exercicio={5} />
        <Botao exercicio={6} />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
