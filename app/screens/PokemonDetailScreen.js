import React from 'react';
import {StyleSheet, View} from 'react-native';

import usePokemonDetail from '../hooks/usePokemonDetail';
import PokemonCard from '../components/PokemonCard';
import AppButton from '../components/AppButton';

const PokemonDetailScreen = () => {
  const {data, kantoList, onPressSave} = usePokemonDetail();
  return (
    <View style={styles.container}>
      {!!data && (
        <>
          <PokemonCard
            id={data.id}
            name={data.name}
            encounter={kantoList}
            containerStyle={styles.pokemonCard}
          />
          <AppButton
            title="Save"
            onPress={onPressSave}
            containerStyle={styles.button}
          />
        </>
      )}
    </View>
  );
};

export default PokemonDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  pokemonCard: {
    marginVertical: 15,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#FECA1C',
  },
});
