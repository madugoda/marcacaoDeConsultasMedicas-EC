import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌸 Bem-vindo ao meu App 🌸</Text>
      <Text style={styles.subtitle}>Teste da aula do dia 28/03/2025 🐰💖</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec', // cor de fundo rosa claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff69b4', // rosa quente
    fontFamily: 'sans-serif', // fonte fofa
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#ff8c00', // laranja suave
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginTop: 10,
  },
});

