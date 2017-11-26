import React from 'react'
import {View, FlatList} from 'react-native'
import {Button, Text} from 'native-base'
import matchSorter from 'match-sorter'
import TextInput from './text'

function renderItem (item, input) {
  const handlePress = () => {
    return input.onChange(item)
  }

  return <Button rounded onPress={handlePress} style={{ zIndex: 999, marginRight: 10, maxWidth: 270 }}>
    <Text>{item.name}</Text>
  </Button>
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
        <View>
          <Text style={{ color: '#777', marginBottom: 5 }}>Clique em uma das opções:</Text>
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