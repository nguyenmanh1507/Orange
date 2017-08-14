import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View
} from 'react-native'
import ButtonLoading from './ButtonLoading'

class MainApp extends Component {
  state = {
    loading: false
  }

  onPressButton = (loading) => {
    this.setState({ loading })
  }

  render () {
    const { loading } = this.state

    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>Animated container</Text>
        <View style={styles.content}>
          <ButtonLoading
            label='Login'
            loading={loading}
            onPress={this.onPressButton}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  toolbar: {
    backgroundColor: '#f39c12',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center'
  },
  content: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MainApp
