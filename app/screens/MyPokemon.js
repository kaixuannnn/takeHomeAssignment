import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import Separator from '../components/Separator';
import {MY_POKEMON_LIST, REFRESH_MY_LIST} from '../config/constants';
import storge from '../helper/storage';

const MyPokemon = () => {
  const [dataList, setDataList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMyPokemonList();
  }, []);

  useEffect(() => {
    const listener = EventRegister.addEventListener(REFRESH_MY_LIST, () =>
      getMyPokemonList(),
    );
    return () => EventRegister.removeEventListener(listener);
  }, []);

  const getMyPokemonList = async () => {
    setLoading(true);
    const list = await storge.get(MY_POKEMON_LIST);
    setDataList(list);

    setLoading(false);
  };

  const ListItem = ({id, name}) => {
    return (
      <View>
        <Text style={styles.value}>
          <Text style={styles.title}>ID: </Text>
          {id}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.title}>Name: </Text>
          {name}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        refreshing={loading}
        onRefresh={getMyPokemonList}
        ListHeaderComponent={<Text style={styles.header}>My Pokemon List</Text>}
        data={dataList}
        renderItem={({item}) => <ListItem id={item.id} name={item.name} />}
        ItemSeparatorComponent={() => <Separator style={styles.separator} />}
      />
    </View>
  );
};

export default MyPokemon;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  value: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  separator: {
    marginVertical: 8,
  },
  header: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 15,
    marginTop: 10,
  },
});
