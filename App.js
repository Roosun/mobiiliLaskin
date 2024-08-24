import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubstract = () => {
    setResult(Number(num1) - Number(num2));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Result: {result}</Text>

      <TextInput 
        style={styles.input} 
        keyboardType='numeric'
        onChangeText={num1 => setNum1(num1)}
      />
      <TextInput
        style={styles.input} 
        keyboardType='numeric'
        onChangeText={num2 => setNum2(num2)}
      />

      <View style={styles.buttonContainer}>
        <Button title ="+" onPress={handleAdd}/>
          <View style={{ width: 20 }} />
        <Button title ="-" onPress={handleSubstract}/>
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
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

});
