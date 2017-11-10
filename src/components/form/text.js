import React from 'react'
import {View, Item, Input, Icon, Label, Text} from 'native-base'

export default function ({ input, meta: { touched, error }, label, secure = false, type = 'default' }) {
  const hasError = touched && !!error

  return (
    <View style={{ marginVertical: 10 }}>
      <Item error={hasError} floatingLabel style={{ flexDirection: 'row-reverse' }}>
        <Label>{label}</Label>
        <Input secureTextEntry={secure} keyboardType={type} onChangeText={input.onChange} {...input} />
        { hasError && <Icon name='close-circle' /> }
      </Item>
      { hasError && <Text style={{ marginLeft: 2, marginTop: 5, fontSize: 15, color: 'red' }}>{error}</Text> }
    </View>
  )
}