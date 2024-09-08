import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { styles } from './styles';

export default function History({ route }) {
    const { history } = route.params;

    return (
    <View style={styles.container}>
      <Text style={styles.historyText}>History</Text>    
      <View style={styles.listContainer}>
        <FlatList
          data={history}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          ListEmptyComponent={<Text>No history available</Text>}
        />  
      </View>
    </View>
  );
}