/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../Contains/color';

const styles = StyleSheet.create({
  addTask: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    bottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 44,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: color.primary,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconPlus: {
    width: 44,
    height: 44,
    backgroundColor: color.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: color.background,
  },
  icon: {
    fontSize: 24,
    color: 'white',
  },
});

export default styles;
