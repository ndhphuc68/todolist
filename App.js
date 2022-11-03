/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Task from './App/Components/Task/index.js';
export default function App() {
  return (
    <View style={styles.views}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView>
          <Task />
        </ScrollView>
      </View>
      <View style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  views: {
    flex: 1,
    backgroundColor: '#eff7f8',
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
