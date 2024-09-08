import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);
    const navigation = useNavigation();
  
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

    const navigateToHistory = () => {
        navigation.navigate('History', { history });
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
                <View style={{ width: 10 }} />
            <Button title ="-" onPress={handleSubstract}/>
                <View style={{ width: 10 }} />
            <Button title="History" onPress={navigateToHistory} />
          </View>    

              
         
        </View>
    
      );

}