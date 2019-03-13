import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';
import KeyboardAwareContainer from './KeyboardAwareContainer';

const EditList = ({
  name,
  product,
  products,
  note,
  errors,
  onNameChange,
  onProductChange,
  onNoteChange,
  onSave,
  onProductAdd,
  onProductDelete,
}) => (
  <View style={styles.container}>
    <KeyboardAwareContainer>
      <Input
        onChangeText={onNameChange}
        value={name}
        errorMessage={errors.name}
        placeholder="List name"
      />

      <Input
        onChangeText={onProductChange}
        placeholder="Product"
        errorMessage={errors.products}
        value={product}
      />
      <View style={styles.flexRow}>
        <Button
          type="outline"
          title="Add Product"
          onPress={onProductAdd}
          icon={<Icon name="plus-square" color={Colors.primary} />}
        />
      </View>

      {products
        && products.map((product, index) => (
          <CheckBox
            key={`product ${index}`}
            title={product}
            iconRight
            textStyle={{ flex: 1 }}
            iconType="feather"
            uncheckedIcon="delete"
            uncheckedColor={Colors.errorBackground}
            onIconPress={() => onProductDelete(product)}
          />
        ))}

      <Input onChangeText={onNoteChange} placeholder="Note" value={note} />
    </KeyboardAwareContainer>

    <View style={styles.flexRow}>
      <Button type="outline" title="Save" onPress={onSave} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  flexRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5,
  },
});

EditList.propTypes = {
  name: PropTypes.string,
  product: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.string),
  note: PropTypes.string,
  errors: PropTypes.object,
  onNameChange: PropTypes.func.isRequired,
  onProductChange: PropTypes.func.isRequired,
  onNoteChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onProductAdd: PropTypes.func.isRequired,
  onProductDelete: PropTypes.func.isRequired,
};

EditList.defaultProps = {
  name: '',
  product: '',
  products: [],
  note: '',
  errors: {
    name: '',
    products: '',
  },
};

export default EditList;
