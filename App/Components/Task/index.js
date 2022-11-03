/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
const Task = () => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.square}>
          <Text style={styles.number}>1</Text>
        </View>
        <Text style={styles.textContent}>Học</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
