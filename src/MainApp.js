import React, { PureComponent } from 'react'
import { NetInfo, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class MainApp extends PureComponent {
  pendingSync = undefined

  state = {
    isConnected: undefined,
    syncStatus: undefined,
    serverResponse: undefined,
    syncStatus: ''
  }

  submitData(bodyData) {
    return fetch('https://posttestserver.com/post.php', {
      method: 'POST',
      body: JSON.stringify(bodyData)
    })
      .then(response => response.text())
      .then(responseText => {
        this.setState({ serverResponse: responseText })
      })
  }

  onSubmitPress = () => {
    const { isConnected } = this.state
    submitBody = {
      name: 'React Native Cookbook',
      timestamp: Date.now()
    }

    if (isConnected) {
      this.submitData(submitBody)
      return
    }

    this.pendingSync = submitBody
    this.setState({ syncStatus: 'Pending' })
  }

  onConnectedChange = isConnected => {
    const pendingSync = this.pendingSync
    this.setState({ isConnected })

    if (pendingSync) {
      this.setState({ syncStatus: 'Syncing' })

      this.submitData(pendingSync).then(() => {
        this.setState({ syncStatus: 'Sync complete' })
      })
    }
  }

  componentWillMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ isConnected })
    })

    NetInfo.isConnected.addEventListener('change', this.onConnectedChange)
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('change', this.onConnectivityChange)
  }

  render() {
    const { isConnected, syncStatus, serverResponse } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onSubmitPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit Data</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          Connection Status: {isConnected ? 'Connected' : 'Disconnected'}
        </Text>
        <Text style={styles.instructions}>
          Sync Status: {syncStatus}
        </Text>
        <Text style={styles.instructions}>
          Server Response: {serverResponse}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    padding: 20,
    backgroundColor: '#fff'
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'blue'
  }
})

export default MainApp
