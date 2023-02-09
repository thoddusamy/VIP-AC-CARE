import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Banner from './Components/Banner';
import Contactus from './Components/Contactus';
import Headers from './Components/Headers';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Headers />
        <Banner />
        <Contactus />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
