import React, { Component } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'
import Browser from './BrowserView'

class MainApp extends Component {
  state = {
    links: [
      {
        title: 'My Blog',
        url: 'https://medium.com/@crysfel/latest'
      },
      {
        title: 'My Blog',
        url: 'https://medium.com/@crysfel/latest'
      },
      {
        title: 'My Blog',
        url: 'https://medium.com/@crysfel/latest'
      },
      {
        title: 'My Blog',
        url: 'https://medium.com/@crysfel/latest'
      },
      {
        title: 'My Blog',
        url: 'https://medium.com/@crysfel/latest'
      },
      {
        title: 'Random',
        url: 'https://medium.com/@crysfel/latest'
      }
    ]
  }

  renderScene = (route, navigator) => {
    if (route && route.url) {
      return (
        <Browser url={route.url} navigator={navigator} />
      )
    }

    return (
      <View style={styles.content}>
        <Text>Home</Text>
        <View>
          {this.state.links.map(this.renderButton)}
        </View>
      </View>
    )
  }

  renderButton = (btn, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => this.onPressButton(btn.url)}
      style={styles.btn}
    >
      <Text style={styles.text}>{btn.title}</Text>
    </TouchableOpacity>
  )

  onPressButton (url) {
    this.navigator.push({ url })
  }

  render () {
    return (
      <Navigator
        ref={ref => { this.navigator = ref }}
        renderScene={this.renderScene}
        intialRoute={{}}
        configureScene={route => (
          Navigator.SceneConfigs.FloatFromBottom
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    // flex: 1,
    margin: 10,
    backgroundColor: '#c0392b',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
})

export default MainApp
