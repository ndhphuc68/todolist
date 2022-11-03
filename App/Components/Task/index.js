/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
const Task = props => {
  const {number} = props;
  const itemBg = number % 2 === 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity onPress={props.onDeleteTask}>
      <View style={styles.item}>
        <View style={[styles.square, itemBg]}>
          <Text style={styles.number}>
            {props.number < 10 ? '0' + props.number : props.number}
          </Text>
        </View>
        <Text style={styles.textContent}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
