import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const AppTextInput = ({...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...otherProps}></TextInput>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    borderColor: 'grey',
    borderWidth: 0.8,
    marginRight: 5,
  },
  textInput: {
    color: 'black',
    fontSize: 16,
    padding: 0,
  },
});
