import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import ListItem from '../components/ListItem';

class ArchivedListScreen extends React.Component {
  static navigationOptions = {
    title: 'Archived',
  };

  render() {
    const { archived, navigation } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          keyExtractor = { (item, index) => index.toString() }
          data={archived}
          renderItem={({ item }) => (
          <ListItem
            item={item}
            onPress={() => navigation.navigate('ArchivedDetails', { item })}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => ({
  archived: state.archived 
})

export default connect(mapStateToProps)(ArchivedListScreen)

