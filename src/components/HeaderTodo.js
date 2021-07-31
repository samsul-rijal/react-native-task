import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderTodo() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 38,
        backgroundColor: '#ff5c33',
        paddingHorizontal: 220
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        width: 200,
    }
})