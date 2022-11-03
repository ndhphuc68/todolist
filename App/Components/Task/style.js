/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
    backgroundColor: '#53d6f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  textContent: {
    width: '80%',
    fontSize: 16,
    justifyContent: 'center',
  },
});

export default styles;
