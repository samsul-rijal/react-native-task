import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TodoItem(props) {
  let style = props.item.completed
    ? {
        textDecorationLine: "line-through",
      }
    : {
        textDecorationLine: "none",
      };

  return (
    <View style={{
        borderWidth: 2, 
        borderColor: '#ebebe0',
        borderRadius: 10,
        margin: 8,
        paddingHorizontal: 10,
        width: 310,
    }}>
    <TouchableOpacity
      style={{
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      onPress={() => props.completeFunction()}
    >
        
        <Text style={[{ fontSize: 18, color: "#e67e22", marginRight: 50, marginTop: 8 }, style]}>
        {props.item.text}
      </Text>

      <TouchableOpacity
        style={{
          padding: 8,
          alignItems: "center",
          borderRadius: 10,
          width: 40,
          justifyContent: "center",
        }}
        onPress={() => props.deleteFunction()}
      >
        
        <Text style={{ color: "#FFF" }}>
        <Ionicons name="trash-outline" size={25} color="#e74c3c" />
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
    </View>
  );
}

export default TodoItem;