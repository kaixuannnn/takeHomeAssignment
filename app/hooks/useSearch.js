import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import moment from 'moment';

import {getAllPokemonApi} from '../api';
import storage from '../helper/storage';
import {ALL_POKEMON, LAST_RETRIEVE} from '../config/constants';

const useSearch = () => {
  const [input, setInput] = useState();
  const [changeList, setChangeList] = useState([]);
  const [all, setAll] = useState([]);
  const [retriveDate, setRetriveDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => getAllPokemon(), []);

  useEffect(() => getLastRetrievedDate(), [all]);

  useEffect(() => {
    const arr = all.filter(item => item.name.includes(input));
    setChangeList(arr);
  }, [input]);

  const changeTextHandler = text => {
    setInput(text);
  };
  const getLastRetrievedDate = async () => {
    const time = await storage.get(LAST_RETRIEVE);
    setRetriveDate(moment(time).format('MMMM Do YYYY, h:mm:ss a'));
  };

  const getAllPokemon = async () => {
    const existList = await storage.get(ALL_POKEMON);
    const lastTimestamp = await storage.get(LAST_RETRIEVE);
    const now = moment();
    const last = moment(lastTimestamp);

    if (!existList || !lastTimestamp || now.diff(last, 'days') > 7) {
      try {
        const res = await getAllPokemonApi();
        if (res.results.length < res.count) {
          const result = await getAllPokemonApi({offset: 0, limit: res.count});
          await storage.store(ALL_POKEMON, result.results);
          await storage.store(LAST_RETRIEVE, moment().format());
          setAll(result.results);
        }
      } catch (err) {
        Alert.alert('Error', err);
      }
    } else {
      setAll(existList);
    }
  };

  const onPressSearch = () => navigation.navigate('PokemonDetail', {input});

  return {
    changeList,
    input,
    setInput,
    onPressSearch,
    changeTextHandler,
    getLastRetrievedDate,
    retriveDate,
  };
};

export default useSearch;
