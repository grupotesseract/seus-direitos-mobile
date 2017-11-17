import React from 'react'
import {View, FlatList, TouchableOpacity} from 'react-native'
import {Item, Input, Icon, Label, Button, Badge, Text} from 'native-base'
import matchSorter from 'match-sorter'
import TextInput from './text'

function renderItem (item, input) {
  const handlePress = () => {
    return input.onChange(item)
  }

  return (
    <TouchableOpacity onPress={handlePress} style={{ zIndex: 999, marginLeft: 10 }}>
      <Badge primary>
        <Text>{item.name}</Text>
      </Badge>
    </TouchableOpacity>
  )
}

export default function ({label, input, meta, options = []}) {
  const value = typeof input.value === 'object' ? input.value.name : input.value
  const data = matchSorter(options, value, {keys: ['name']})
  const objectInput = {
    ...input,
    value
  }

  return (
    <View>
      <TextInput input={objectInput} meta={meta} label={label} showValidationMessage={false} />
      { !!input.value &&
        typeof input.value !== 'object' &&
        data.length > 0 &&
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#777' }}>Selecione:</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            extraData={input.value.name}
            keyExtractor={item => item.id}
            renderItem={({item}) => renderItem(item, input)}
          />
        </View>
      }
    </View>
  )
}