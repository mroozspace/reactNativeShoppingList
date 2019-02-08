import React from 'react';
import Details from './Details';

class ArchivedDetails extends React.Component {
  static navigationOptions = {
    title: 'Archived Details'
  };

  render() {
    const item = this.props.navigation.getParam('item', {});
    return <Details item={item}/>
  }
}

export default ArchivedDetails
