import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  ScrollView
} from 'react-native'
import Panel from './Panel'

const MainApp = () => (
  <ScrollView style={styles.main}>
    <Text style={styles.toolbar}>Animated containers</Text>
    <View style={styles.content}>
      <Panel style={styles.panel}>
        <View style={styles.panelContent}>
          <Text>The HP Pavilion g6-1d46dx was a decent mainstream laptop in its day, and you could replace it with something very similar. There have been lots of changes at the low end of the windows market, with touch-screen tablets and 2-in-1s, and at the high-end, with super-thin laptops with high-resolution screens, like the latest Dell XPS 13 and Microsoft’s new Surface laptop. But 15.6in laptops have not changed much, and they still sell by the truckload. Today’s mainstream laptops are thinner than they used to be – your HP g6 is 1.4in thick – and cheaper. However, the standard specification remains much the same. Your current laptop, for example, has 4GB of memory, a 500GB hard drive, a 1366 x 768-pixel screen and Microsoft Windows. That’s still the most common specification.</Text>
        </View>
      </Panel>
      <Panel style={styles.panel}>
        <View style={styles.panelContent}>
          <Text>The HP Pavilion g6-1d46dx was a decent mainstream laptop in its day, and you could replace it with something very similar.</Text>
        </View>
      </Panel>
      <Panel style={styles.panel} expanded>
        <View style={styles.panelContent}>
          <Text>The HP Pavilion g6-1d46dx was a decent mainstream laptop in its day, and you could replace it with something very similar. There have been lots of changes at the low end of the windows market, with touch-screen tablets and 2-in-1s, and at the high-end, with super-thin laptops with high-resolution screens, like the latest Dell XPS 13 and Microsoft’s new Surface laptop. But 15.6in laptops have not changed much, and they still sell by the truckload. Today’s mainstream laptops are thinner than they used to be – your HP g6 is 1.4in thick – and cheaper. However, the standard specification remains much the same. Your current laptop, for example, has 4GB of memory, a 500GB hard drive, a 1366 x 768-pixel screen and Microsoft Windows. That’s still the most common specification.</Text>
          <Text>The HP Pavilion g6-1d46dx was a decent mainstream laptop in its day, and you could replace it with something very similar. There have been lots of changes at the low end of the windows market, with touch-screen tablets and 2-in-1s, and at the high-end, with super-thin laptops with high-resolution screens, like the latest Dell XPS 13 and Microsoft’s new Surface laptop. But 15.6in laptops have not changed much, and they still sell by the truckload. Today’s mainstream laptops are thinner than they used to be – your HP g6 is 1.4in thick – and cheaper. However, the standard specification remains much the same. Your current laptop, for example, has 4GB of memory, a 500GB hard drive, a 1366 x 768-pixel screen and Microsoft Windows. That’s still the most common specification.</Text>
        </View>
      </Panel>
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center'
  },
  content: {
    padding: 10,
    flex: 1
  },
  panel: {
    marginBottom: 10
  },
  panelContent: {
    padding: 10
  }
})

export default MainApp
