import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

// Root Component

export default function App() {
  const [enteredTodoText, setEnteredTodoText] = useState('');

  const [todoList, setTodoList] = useState([]);

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {
    setTodoList((currentTodoList) => [...currentTodoList, enteredTodoText]);
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar style='auto' />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Type your next todo here...'
          onChangeText={todoInputHandler}
        />
        <Button title='+ Add' onPress={addTodoHandler} />
      </View>
      <View style={styles.todoContainer}>
        {todoList.map((todo) => (
          <Text>{todo}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  todoContainer: {
    flex: 5,
    marginTop: 24,
  },
});
