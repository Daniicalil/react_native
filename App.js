import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import exemplo from './src/atividade 1';

export default function App() {
  return (
    <View style={styles.container}>
      <Props mensagem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90caf9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});
