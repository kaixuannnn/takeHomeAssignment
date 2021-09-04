import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const PokemonCard = ({encounter, id, name, containerStyle}) => {
  const Section = ({title, value}) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <Section title="ID" value={id} />
      <Section title="Name" value={name} />
      <Text style={styles.title}>Encounter Area in Kantoi:</Text>
      <FlatList
        style={styles.sectionContainer}
        ListEmptyComponent={<Text>-</Text>}
        data={encounter}
        renderItem={({item}) => (
          <Text style={styles.value}>{item.location_area.name}</Text>
        )}
      />
      {encounter && encounter.length > 0 && (
        <Section
          title="Encounter Method"
          value={
            encounter[0].version_details[0].encounter_details[0].method.name
          }
        />
      )}
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 20,
    padding: 15,
  },

  sectionContainer: {
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
  },
  value: {
    fontSize: 16,
  },
});
