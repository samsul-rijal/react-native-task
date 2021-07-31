import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderMovies() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Movies Avengers</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#e60000',
        paddingHorizontal: 220,
        marginBottom: 8,
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        width: 200,
    }
})