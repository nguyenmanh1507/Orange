import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Animated,
  Easing,
  StyleSheet,
  Text
} from 'react-native'

export default class Notification extends Component {
  static propTypes = {
    autoHide: PropTypes.bool,
    default: PropTypes.number,
    message: PropTypes.string,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  }

  static defaultProps = {
    delay: 5000,
    onClose: emptyFn,
    onOpen: emptyFn
  }

  state = {
    height: -1000
  }

  getAnimation (value, autoHide) {
    const { delay } = this.props
    return Animated.timing(
      this.animatedValue,
      {
        toValue: value,
        duration: 500,
        easing: Easing.cubic,
        delay: autoHide ? delay : 0
      }
    )
  }

  startSlideIn () {
    const { onOpen, autoHide } = this.props

    this.animatedValue.setValue(0)
    this.getAnimation(1)
      .start(() => {
        onOpen()
        if (autoHide) {
          this.startSlideOut()
        }
      })
  }

  startSlideOut () {
    const { autoHide, onClose } = this.props

    this.animatedValue.setValue(1)
    this.getAnimation(0, autoHide)
      .start(() => onClose())
  }

  onLayoutChange = (event) => {
    const { layout: { height } } = event.nativeEvent

    if (this.state.height === -1000) {
      this.setState({ height })
    }
  }

  componentWillMount () {
    this.animatedValue = new Animated.Value()
  }

  componentDidMount () {
    this.startSlideIn()
  }

  render () {
    const { message } = this.props
    const { height } = this.state
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-height, 0]
    })

    return (
      <Animated.View
        onLayout={this.onLayoutChange}
        style={[
          styles.main,
          { top }
        ]}
      >
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    position: 'absolute',
    left: 0,
    right: 0
  },
  text: {
    color: '#fff'
  }
})

function emptyFn () {}
