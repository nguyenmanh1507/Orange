import React, { PureComponent } from 'react'
import { NetInfo, StyleSheet, Text, View } from 'react-native'

class MainApp extends PureComponent {
  state = {
    online: null,
    offline: null
  }

  onConnectivityChange = reach => {
    const type = reach.toLowerCase()
    this.setState({
      online: type !== 'none',
      offline: type === 'none'
    })
  }

  renderMask() {
    if (this.state.offline) {
      return (
        <View style={styles.mask}>
          <View style={styles.msg}>
            <Text style={styles.alert}>
              Seems like you do not have network connection anymore.
            </Text>
            <Text style={styles.alert}>
              You can still continue using the app, with limited content.
            </Text>
          </View>
        </View>
      )
    }
  }

  componentWillMount() {
    NetInfo.fetch().done(reach => {
      this.onConnectivityChange(reach)
    })

    NetInfo.addEventListener('change', this.onConnectivityChange)
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('change', this.onConnectivityChange)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolbar}>My Awesome App</Text>
        <Text style={styles.text}>Lorem...</Text>
        <Text style={styles.text}>Lorem ipsum...</Text>
        {this.renderMask()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  toolbar: {
    backgroundColor: '#3498db',
    padding: 15,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  text: {
    padding: 10
  },
  mask: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    right: 0
  },
  msg: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    padding: 10,
    width: 300
  },
  alert: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5
  }
})

export default MainApp
