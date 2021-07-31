import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function DetailMovies() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Detail Movies</Text>
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
