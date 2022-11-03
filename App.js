/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import Input from './App/Components/Input/index.js';
import Task from './App/Components/Task/index.js';
import color from './App/Contains/color';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = task => {
    //addTask
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = index => {
    Alert.alert('Thông báo !!!', 'Bạn chắc chắn muốn xoá ?', [
      {
        text: 'OK',
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };
  return (
    <View style={styles.views}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView>
          {taskList.map((value, index) => {
            return (
              <Task
                key={index}
                title={value}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Input onAddTask={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  views: {
    flex: 1,
    backgroundColor: color.background,
  },
  body: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
