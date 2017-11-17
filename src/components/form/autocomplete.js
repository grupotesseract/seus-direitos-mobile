import React from 'react'
import {View, Item, Input, Icon, Label, Picker, Header, Button, Left, Right, Title, Body} from 'native-base'

export default function ({ input, meta: { touched, error }, label }) {
  const hasError = touched && !!error

  const inputField = <Item rounded>
    <Icon active name='search' />
    <Input placeholder={label} onChangeText={input.onChange} {...input} />
  </Item>

  return (
    <Picker
      mode="dropdown"
      renderHeader={backAction =>
        <Header style={{ backgroundColor: "#f44242" }}>
          <Left>
            <Button transparent onPress={backAction}>
              <Icon name="arrow-back" style={{ color: "#fff" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }}>Your Header</Title>
          </Body>
          <Right />
        </Header>
      }
      selectedValue={input.value}
      onValueChange={input.onChange}
    >
      <Item label="Wallet" value="key0" />
      <Item label="ATM Card" value="key1" />
      <Item label="Debit Card" value="key2" />
      <Item label="Credit Card" value="key3" />
      <Item label="Net Banking" value="key4" />
    </Picker>
  )

}