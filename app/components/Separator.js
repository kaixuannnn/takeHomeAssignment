import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = ({style}) => {
  return <View style={[styles.separator, style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {backgroundColor: 'grey', opacity: 0.5, height: 0.5},
});
