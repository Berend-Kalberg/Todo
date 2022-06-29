import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  ImageBackground,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function TodoInput(props) {
  // Initual state set to empty string
  const [enteredTodoText, setEnteredTodoText] = useState('');

  // Handles todo input
  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  // If field is empty trow alert, else add todo and clear the text in textinput
  function addTodoHandler() {
    if (!enteredTodoText.trim()) {
      alert('Field is empty!');
      return;
    } else {
      props.onAddTodo(enteredTodoText);
      setEnteredTodoText('');
    }
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <LinearGradient
        colors={['#f3128284', '#311b6b', '#1e085a']}
        style={styles.inputContainer}
      >
        <ImageBackground
          source={require('../assets/images/background.jpeg')}
          resizeMode='cover'
          style={{ flex: 1 }}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.groupContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Type your next todo here...'
              onChangeText={todoInputHandler}
              value={enteredTodoText}
              clearButtonMode='while-editing'
              autoCapitalize='sentences'
              autoCorrect={true}
              returnKeyType='done'
              autoFocus={true}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title='Cancel'
                  onPress={props.onCancel}
                  color='#f31282'
                />
              </View>
              <View style={styles.button}>
                <Button title='Add' onPress={addTodoHandler} color='#a97be5' />
              </View>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  groupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
    color: '#120438',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
