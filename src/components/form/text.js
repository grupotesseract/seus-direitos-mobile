import React from 'react'
import { StyleSheet } from 'react-native'
import {View, Item, Input, Icon, Label, Text} from 'native-base'

const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'black',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        paddingBottom: 4,
        paddingTop: 6
    },
    labelStyle: {
        color: '#000',
        fontFamily: 'niramid-regular',
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    errorText: {
        marginLeft: 2,
        marginTop: 5,
        fontSize: 15,
        color: 'red'
    },
    errorIcon: {
        position: 'absolute',
        right: 0,
        top: 16
    }
})

export default function ({ input,
                           meta: { touched = false, error = '' },
                           label,
                           secure = false,
                           type = 'default',
                           disabled = false,
                           style
                        }) {
  const hasError = touched && !!error

  return (
      <View style={{ marginVertical: 10 }}>
          <Item error={hasError} floatingLabel style={styles.itemWrapper}>
              <Label style={styles.labelStyle}>{label}</Label>
              <Input
                  secureTextEntry={secure}
                  disabled={disabled}
                  keyboardType={type}
                  onChangeText={input.onChange}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  style={style}
                  {...input}
                  />
              { hasError && <Icon style={styles.errorIcon} name='close-circle' /> }
          </Item>
          { hasError && <Text style={styles.errorText}>{error}</Text> }
      </View>
  )
}
