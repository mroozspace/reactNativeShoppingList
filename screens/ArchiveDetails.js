import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details';

class ArchivedDetails extends React.Component {
  static navigationOptions = {
    title: 'Archived Details',
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});
    return <Details item={item} />;
  }
}

ArchivedDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ArchivedDetails;
