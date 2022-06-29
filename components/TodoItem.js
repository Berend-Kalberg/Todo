import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function TodoItem(props) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: '#43098fff' }}
        onPress={props.onDeleteTodo.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedTodoItem}
      >
        <Text style={styles.todoItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedTodoItem: {
    opacity: 0.5,
  },
  todoItemText: {
    padding: 8,
    color: 'white',
  },
});
