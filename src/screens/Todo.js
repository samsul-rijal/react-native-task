import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Alert } from "react-native";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import HeaderTodo from "../components/HeaderTodo";

export default function Todo() {
  const [todoItems, setTodoItems] = useState([
    {
      text: "Buy Coffe",
      completed: true,
    },
    {
      text: "Singing",
      completed: true,
    },
  ]);

  // Add Function
  function addItemTodo(_text) {
    if(_text.length > 3) {
      setTodoItems([...todoItems, { text: _text, completed: false }]);
    } else {
      Alert.alert('Todo must be over 3 char long!')
    }
  }

  // Delete Function
  function deleteItemTodo(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }

  //Completed Function
  function completeItemTodo(_index) {
    let tempArr = [...todoItems];
    tempArr[_index].completed = true;
    setTodoItems(tempArr);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderTodo />
      <TodoInput onPress={addItemTodo} />
      <SafeAreaView
        style={{ padding: 16, justifyContent: "space-between", flex: 1 }}
      >
        <FlatList
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                item={item}
                deleteFunction={() => deleteItemTodo(index)}
                completeFunction={() => completeItemTodo(index)}
              />
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});