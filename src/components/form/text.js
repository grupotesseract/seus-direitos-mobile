import React from 'react'
import {View, Item, Input, Icon, Label, Text} from 'native-base'

export default function ({ input,
                           meta: { touched = false, error = '' },
                           label,
                           secure = false,
                           type = 'default',
                           disabled = false
                        }) {
  const hasError = touched && !!error

  return (
    <View style={{ marginVertical: 10 }}>
      <Item error={hasError} floatingLabel style={{ flexDirection: 'row-reverse' }}>
        <Label>{label}</Label>
        <Input
          secureTextEntry={secure}
          disabled={disabled}
          keyboardType={type}
          onChangeText={input.onChange} {...input}
          style={{borderColor: '#6198D8'}}
        />
        { hasError && <Icon name='close-circle' /> }
      </Item>
      { hasError && <Text style={{ marginLeft: 2, marginTop: 5, fontSize: 15, color: 'red' }}>{error}</Text> }
    </View>
  )
}