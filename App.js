import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaViewBase style={styles.container}>
      <Text >Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente, suscipit expedita alias reprehenderit error nemo. Iusto accusamus sunt tempora odio repellendus ipsa, voluptate reiciendis quam unde, natus vitae voluptatibus?</Text>
      <StatusBar style="auto" />
    </SafeAreaViewBase>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
