import { View, StyleSheet } from 'react-native';

import Atividade_1 from './src/atividade_1/index';

export default function App() {
  return (
    <View style={styles.container}> 
        <Atividade_1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#90caf9',
    padding: 8,
  },
});
