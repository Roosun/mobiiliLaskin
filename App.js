import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';


export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    const additionResult = Number(num1) + Number(num2);
    setResult(additionResult);
    setHistory([ { key: `${num1} + ${num2} = ${additionResult}`}, ...history ]);
    setNum1('');
    setNum2('');
  };

  const handleSubstract = () => {
    const substractionResult = Number(num1) - Number(num2)
    setResult(substractionResult);
    setHistory([ {key: `${num1} - ${num2} = ${substractionResult}`}, ...history ]);
    setNum1('');
    setNum2('');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Result: {result}</Text>
      <TextInput 
        style={styles.input} 
        keyboardType='numeric'
        onChangeText={setNum1}
        value={num1}
      />
      <TextInput
        style={styles.input} 
        keyboardType='numeric'
        onChangeText={setNum2}
        value={num2}
      />

      <View style={styles.buttonContainer}>
        <Button title ="+" onPress={handleAdd}/>
          <View style={{ width: 20 }} />
        <Button title ="-" onPress={handleSubstract}/>
      </View>

      <Text style={styles.historyText}>History</Text>    

      <View style={styles.listContainer}>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text >{item.key}</Text>}
        ListEmptyComponent={<Text>No history available</Text>}
      />  
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '33%',
  },
  resultText: {
    fontSize: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor:'gray',
    borderWidth: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  historyText: {
    fontSize: 20,
    marginTop: 30
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
