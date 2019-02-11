import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors'
import { Input, CheckBox, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import KeyboardAwareContainer from './/KeyboardAwareContainer'

const EditList = props => {
  const {
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
    onProductDelete
  } = props
  return (
    <View style={styles.container}>
      <KeyboardAwareContainer>
      <Input
        onChangeText={onNameChange}
        value={name}
        errorMessage={errors.name}
        placeholder='List name'
      />

      <Input
        onChangeText={onProductChange}
        placeholder='Product'
        errorMessage={errors.products}
        value={product}
      />
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
        <Button
          type='outline'
          title='Add Product'
          onPress={onProductAdd}
          icon={<Icon name='plus-square' color={Colors.primary} />}
        />
      </View>
      
      {products && products.map((product, index) => (
        <CheckBox
          key={`product ${index}`}
          title={product}
          iconRight
          textStyle={{flex: 1}}
          iconType='feather'
          uncheckedIcon='delete'
          uncheckedColor={Colors.errorBackground}
          onIconPress={ () => onProductDelete(product)}
        />
      ))}

      <Input
        onChangeText={onNoteChange}
        placeholder='Note'
        value={note}
      />

      </KeyboardAwareContainer>
      
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
        <Button 
          type='outline'
          title='Save'
          onPress={onSave}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  contentContainer: {
    backgroundColor: '#fff'
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5
  }
});

export default EditList
