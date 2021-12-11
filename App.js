import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from 'react-native';

import ToDoList from './components/ToDoList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const onAdd = () => {
    setTasks((prevState) => {
      const tasks = [...prevState];
      tasks.push({ id: tasks.length, title: text, done: false });
      return tasks;
    }); // Добавляем новую задачу 

    setText(""); //Очищаем поле
  };

  const toggle = (id) => {
    const dublicateTasks = [...tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    dublicateTasks[taskIndex].done = !dublicateTasks[taskIndex].done;
    setTasks(dublicateTasks);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter task" value={text} onChangeText={setText} />
      <Button title={"Add"} onPress={onAdd} />
      <ToDoList tasks={tasks} toggle={toggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1
  }
});
