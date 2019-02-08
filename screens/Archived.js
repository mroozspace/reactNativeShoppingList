import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import ListItem from '../components/ListItem';
import { deleteFromArchivedList } from '../actions';

class ArchivedListScreen extends React.Component {
  static navigationOptions = {
    title: 'Archived',
  };

  render() {
    const { archived } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          keyExtractor = { (item, index) => index.toString() }
          data={archived}
          renderItem={({ item }) => (
          <ListItem 
            item={item}
            navTarget={'ArchivedDetails'}
            onDelete={this.props.deleteFromArchivedList}
            {...this.props.navigation}
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
    padding: 25,
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => ({
  archived: state.archived 
})

const mapDispatchToProps = dispatch => ({
  deleteFromArchivedList: list => dispatch(deleteFromArchivedList(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedListScreen)

