import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function mainView ({ children, padder, extraScroll }) {
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={!!extraScroll ? extraScroll : 0}
      style={{ paddingHorizontal: padder ? 16 : 0, backgroundColor: 'white' }}>
      {children}
    </KeyboardAwareScrollView>
  )
}