import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";

function TodoInput(props) {
  const [text, setText] = useState("");

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          height: 50,
          borderColor: "#16a085",
          borderWidth: 1,
          borderRadius: 5,
          width: 300,
          padding: 10,
          marginTop: 30
        }}
        onChangeText={(text) => setText(text)}
      />

      <TouchableOpacity
        style={{
          borderRadius: 10,
          backgroundColor: "#ff5c33",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          width: 200,
          margin: 8,
          padding: 8,
        }}
        onPress={() => props.onPress(text)}
      >
        <Text style={{ color: "#FFF" }}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoInput;