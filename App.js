import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './assets/components/HelloWorld';

export default function App() {
  return (
    <View style={styles.container}>
      {/* 이곳에 넣기 */}
        <HelloWorld />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
