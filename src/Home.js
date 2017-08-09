import React, { Component } from 'react'
import {
StyleSheet,
View,
Image,
Text,
ScrollView,
TouchableHighlight
} from 'react-native'

class Home extends Component {
  state = {
    forYou: { // Please duplicate this data
      title: 'Just for you',
      root:
        'https://s3.amazonaws.com/crysfel/public/book/01/07',
      songs: [
        {title: 'Some nice song', image: '1.jpg'},
        {title: 'One more nice song', image: '2.jpg'},
        {title: 'Here is one more song', image: '3.jpg'},
        {title: 'Really nice song', image: '4.jpg'},
        {title: 'I love this song', image: '5.jpg'},
        {title: 'This is a song', image: '6.jpg'}
      ]
    },
    played: { // Please duplicate this data
      title: 'Played',
      root:
        'https://s3.amazonaws.com/crysfel/public/book/01/07',
      songs: [
        {title: 'Some nice song', image: '1.jpg'},
        {title: 'One more nice song', image: '2.jpg'},
        {title: 'Here is one more song', image: '3.jpg'},
        {title: 'Really nice song', image: '4.jpg'},
        {title: 'I love this song', image: '5.jpg'},
        {title: 'This is a song', image: '6.jpg'}
      ]
    },
    popular: { // Please duplicate this data
      title: 'Popular',
      root:
        'https://s3.amazonaws.com/crysfel/public/book/01/07',
      songs: [
        {title: 'Some nice song', image: '1.jpg'},
        {title: 'One more nice song', image: '2.jpg'},
        {title: 'Here is one more song', image: '3.jpg'},
        {title: 'Really nice song', image: '4.jpg'},
        {title: 'I love this song', image: '5.jpg'},
        {title: 'This is a song', image: '6.jpg'}
      ]
    }
  }

  onSelectSong (song) {
    this.props.navigator.push({ song })
  }

  renderSong (section, song, index) {
    return (
      <TouchableHighlight
        onPress={() => this.onSelectSong(song)}
        style={styles.song} key={index}
      >
        <View>
          <Image
            source={{uri: `${section.root}/${song.image}`}}
            style={styles.image}
          />
          <Text style={styles.songTitle}>{song.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  renderSection (options) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {options.title.toUpperCase()}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {options.songs.map((song, index) =>
            this.renderSong(options, song, index)
          )}
        </ScrollView>
      </View>
    )
  }

  render () {
    const {
      forYou,
      played,  // Name of the duplicated data
      popular // Name of the duplicated data
    } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        {this.renderSection(forYou)}
        {this.renderSection(played)}
        {this.renderSection(popular)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1b1a'
  },
  title: {
    backgroundColor: '#37b298',
    color: '#fff',
    padding: 10,
    paddingTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  section: {
    padding: 10
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: '200',
    paddingBottom: 10
  },
  song: {
    backgroundColor: '#081412',
    marginRight: 10
  },
  image: {
    width: 120,
    height: 120
  },
  songTitle: {
    color: '#f1f1f1',
    fontWeight: '200',
    fontSize: 12,
    flex: 1,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 35,
    paddingLeft: 5,
    width: 100,
    height: 100
  }
})

export default Home
