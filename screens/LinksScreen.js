import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>scroll view container</Text> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
});
