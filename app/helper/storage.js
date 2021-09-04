import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    Alert.alert('Error', error);
  }
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);
    if (!item) return null;
    return item;
  } catch (error) {
    Alert.alert('Error', error);
  }
};

const remove = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    Alert.alert('Error', error);
  }
};

export default {
  store,
  get,
  remove,
};
