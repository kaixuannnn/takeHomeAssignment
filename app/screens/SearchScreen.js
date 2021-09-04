import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, FlatList, View, TouchableOpacity} from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Separator from '../components/Separator';
import useSearch from '../hooks/useSearch';

const SearchScreen = () => {
  const {
    changeList,
    input,
    setInput,
    onPressSearch,
    changeTextHandler,
    retriveDate,
  } = useSearch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Pokemon APP,</Text>
      <Text style={styles.subtitle}>Please input Pokemon ID / Name </Text>
      <View style={styles.searchContainer}>
        <AppTextInput
          value={input}
          placeholder="Pokemon ID/Name"
          onChangeText={text => changeTextHandler(text)}
        />
        <AppButton title="Search" onPress={onPressSearch} />
      </View>
      <FlatList
        ItemSeparatorComponent={Separator}
        data={changeList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setInput(item.name)}>
            <Text style={styles.searchItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.date}>Last Retrived Date: {retriveDate}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    padding: 20,
  },
  searchContainer: {flexDirection: 'row', alignItems: 'center'},
  title: {
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  searchItem: {
    padding: 8,
  },
  date: {
    fontStyle: 'italic',
    position: 'absolute',
    bottom: 0,
  },
});
