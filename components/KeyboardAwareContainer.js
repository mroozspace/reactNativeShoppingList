import React from 'react';
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const KeyboardAwareContainer = props => {
  return (
    <KeyboardAwareScrollView 
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps={'handled'} 
      {...props} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default KeyboardAwareContainer;
