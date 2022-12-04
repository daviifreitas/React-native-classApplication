import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from "react-router-dom";
import {Link} from "expo-route"


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Start react native application created By : Davi Freitas de Melo!</Text>\
      <link to="/image">Click here for go to my image page!</link>
      <StatusBar style="auto" />
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
