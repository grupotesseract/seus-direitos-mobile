import React from 'react'
import {View, FlatList, TouchableOpacity} from 'react-native'
import {Item, Input, Icon, Label, Button, Badge, Text} from 'native-base'

function renderItem (item, input) {
  const handlePress = () => {
    return input.onChange(item)
  }
  const selected = input.value.name === item.name
  const style = {
    borderColor:  selected ? 'white' : '#6198D8',
    borderWidth: 1,
    backgroundColor: selected ? '#6198D8' : 'white',
  }

  const colorStyle = {
    color: selected ? 'white' : '#6198D8'
  }

  return (
    <TouchableOpacity onPress={handlePress} style={{ zIndex: 999, marginLeft: 10 }}>
      <Badge style={style}>
        <Text style={colorStyle}>{item.name}</Text>
      </Badge>
    </TouchableOpacity>
  )
}

export default function ({label, input, options = []}) {
  return (
    <View style={{ marginTop: 20, marginBottom: 10 }}>
      <Text style={{ color: '#777', marginBottom: 16 }}>{label}:</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={options}
        extraData={input.value.name}
        keyExtractor={item => item.id}
        renderItem={({item}) => renderItem(item, input)}
      />
    </View>
  )
}