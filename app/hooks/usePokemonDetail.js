import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/core';
import {showMessage} from 'react-native-flash-message';
import {EventRegister} from 'react-native-event-listeners';

import {getPokemonDetailApi, getPokemonEncounterApi} from '../api';
import storage from '../helper/storage';
import {MY_POKEMON_LIST, REFRESH_MY_LIST} from '../config/constants';

const usePokemonDetail = () => {
  const [data, setData] = useState();
  const [kantoList, setKantoList] = useState();
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    getPokemonDetail(route?.params?.input);
    getPokemonEncounterinKanto(route?.params?.input);
  }, []);

  const onPressSave = () => storePokemon(data);

  const getPokemonDetail = async input => {
    try {
      const data = await getPokemonDetailApi(input);
      setData(data);
    } catch (err) {
      Alert.alert('Error', err);
      setData('');
    }
  };

  const getPokemonEncounterinKanto = async input => {
    try {
      const dataList = await getPokemonEncounterApi(input);
      const arr = dataList.filter(data =>
        data.location_area.name.includes('kanto'),
      );
      setKantoList(arr);
    } catch (error) {
      navigation.goBack();
      Alert.alert('Error', err);
    }
  };

  const storePokemon = async data => {
    const list = await storage.get(MY_POKEMON_LIST);
    if (list) {
      const exist = list.find(item => item.id == data.id);
      if (exist) {
        showMessage({
          message: `'${data.name}' is already saved!`,
          type: 'danger',
        });
      } else {
        await storage.store(MY_POKEMON_LIST, [...list, data]);
        showMessage({
          message: `'${data.name}' is successfully saved!`,
          type: 'success',
        });
        navigation.goBack();
        EventRegister.emit(REFRESH_MY_LIST);
      }
    } else {
      await storage.store(MY_POKEMON_LIST, [data]);
      showMessage({
        message: `'${data.name}' is successfully  saved!`,
        type: 'success',
      });
      navigation.goBack();
      EventRegister.emit(REFRESH_MY_LIST);
    }
  };

  return {
    data,
    kantoList,
    onPressSave,
  };
};

export default usePokemonDetail;
