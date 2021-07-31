import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function Home(props) {
  const navigate = props.navigation.navigate

  const getPic = {
    uri: "https://i.pinimg.com/originals/31/36/cd/3136cd447c99783f59cd1a4c7d9ca9c1.png",
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ff471a'}}>Report Task Week 5</Text>
        <Image
            source={getPic}
            style={{ width: 350, height: 350}}
        />
        <Button 
        onPress={ () => navigate('Calculator') }
        title="TAP TO TASK"
        color="#ff471a"
        />
      
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
