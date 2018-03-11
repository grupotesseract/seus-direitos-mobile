import {AsyncStorage} from 'react-native'

const storage = {
  save: async (key, jsonData) => {
    try {
      return await AsyncStorage.setItem(key, jsonData)
    }
    catch (e) {
      //TODO Storage error treatment
      console.warn('storage.save ERROR:', e)
      return e
    }
  },

  load: async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    }
    catch (e) {
      //TODO Storage error treatment
      console.warn('storage.load ERROR:', e)
      return e
    }
  },

  delete: async (key) => {
    try {
      return await AsyncStorage.removeItem(key)
    }
    catch (e) {
      //TODO Storage error treatment
      console.warn('storage.delete ERROR:', e)
      return e
    }
  },

  clear: async () => {
    try {
      return await AsyncStorage.clear()
    }
    catch (e) {
      //TODO Storage error treatment
      console.warn('storage.load ERROR:', e)
      return e
    }
  }
};

export default storage
