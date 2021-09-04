import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AppButton = ({title, containerStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#375DA9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    padding: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 15,
  },
});
