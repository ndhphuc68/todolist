/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../Contains/color';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: color.white,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  square: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  even: {
    backgroundColor: color.green,
  },
  odd: {
    backgroundColor: color.second,
  },
  number: {
    fontSize: 16,
    fontWeight: '700',
    color: color.white,
  },
  textContent: {
    width: '80%',
    fontSize: 16,
    justifyContent: 'center',
  },
});

export default styles;
