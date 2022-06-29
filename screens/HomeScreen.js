import { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Button, Image } from 'react-native';

import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';

import { ThemeContext } from '../context-store/context';

// Exports the default screen
// TODO - FlatList scroll is bugged on Android and Web
// TODO - FlatList scroll is bug when bounce is set to false
export default function HomeScreen(props) {
  // Theme and add todo logic starts here

  const { theme } = useContext(ThemeContext);
  const [modalIsVisible, setModalVisible] = useState(false);
  const [todoList, setTodoList] = useState([]);

  // Checks theme
  // TODO - Remove console.log in prod
  useEffect(() => {
    console.log('homeScreen: ', theme);
  }, [theme]);

  // Sets the modal to visable
  function startAddTodoHandler() {
    setModalVisible(true);
  }
  // Sets the modal to invisable
  function endAddTodoHandler() {
    setModalVisible(false);
  }

  async function addTodoHandler(enteredTodoText) {
    setTodoList((currentTodoList) => [
      ...currentTodoList,
      { text: enteredTodoText, id: Math.random().toString() },
    ]);
    endAddTodoHandler();
  }

  function deleteTodoHandler(id) {
    setTodoList((currentTodoList) => {
      return currentTodoList.filter((todo) => todo.id !== id);
    });
  }

  // Fetch logic begins here
  // TODO - Add logic to component

  // Generates random number
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const url = 'http://127.0.0.1:5500/todo.json';

  // Get random todo with fetch
  // TODO - Remove duplicate todos
  const getTodo = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const data = json.todos;
      console.log(data);
      setTodoList((currentTodoList) => [
        ...currentTodoList,
        { text: data[getRandomInt(15)].title, id: Math.random().toString() },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  // TODO - Clean up fetch logic, redundant function
  function startAddRandomTodoHandler() {
    getTodo();
  }

  return (
    <View
      style={theme == 'light' ? styles.appContainer : styles.appContainer_dark}
    >
      <Image
        style={styles.image}
        source={require('../assets/images/todo.png')}
      />
      <Button
        title='Add a new todo'
        color='#a97be5'
        onPress={startAddTodoHandler}
      />
      <View style={{ marginTop: 16 }}>
        <Button
          title='Add random todo'
          color='#f31282'
          onPress={startAddRandomTodoHandler}
        />
      </View>

      <TodoInput
        visible={modalIsVisible}
        onAddTodo={addTodoHandler}
        onCancel={endAddTodoHandler}
      />

      <View style={styles.todoContainer}>
        <FlatList
          data={todoList}
          renderItem={(itemData) => {
            return (
              <TodoItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteTodo={deleteTodoHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#e4d0ff',
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
    marginBottom: 32,
  },
  todoContainer: {
    marginTop: 16,
    width: '100%',
  },
  appContainer_dark: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#1e085a',
  },
  todoContainer_dark: {
    marginTop: 16,
    width: '100%',
  },
});
