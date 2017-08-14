import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'
import Notification from './Notification'

export default class MainApp extends Component {
  state = {
    notify: false,
    message: 'Life is about making an impact, not making an income. -Kevin Kruse'
  }

  onToggleNotification = () => {
    this.setState(prevState => ({
      notify: !prevState.notify
    }))
    console.log('toggle')
  }

  render () {
    const notify = this.state.notify ? (
      <Notification
        autoHide
        message={this.state.message}
        onClose={this.onToggleNotification}
      />
    ) : null

    return (
      <View>
        <Text style={styles.toolbar}>Main toolbar</Text>
        <View style={styles.content}>
          <Text>Blazeon Scrambles to Police Content Amid Rapid Growth</Text>
          <TouchableOpacity
            onPress={this.onToggleNotification}
            style={styles.btn}
          >
            <Text style={styles.text}>Show notification</Text>
          </TouchableOpacity>
          <Text>Pizzi Announces $1 Billion Fund to Create U.S. Jobs in Manufacturing</Text>
          {notify}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#8e44ad',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center'
  },
  content: {
    padding: 10,
    overflow: 'hidden'
  },
  btn: {
    margin: 10,
    backgroundColor: '#9b59b6',
    borderRadius: 3,
    padding: 10
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  }
})
