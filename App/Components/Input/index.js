/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

const Input = props => {
  const [task, setTask] = useState('');
  const handleAddTask = () => {
    if (task.length === 0) {
      alert('Xin vui lòng nhập công việc!');
      return false;
    }
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10}
      style={styles.addTask}>
      <TextInput
        value={task}
        onChangeText={text => setTask(text)}
        style={styles.input}
        placeholder="You task"
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconPlus}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Input;
