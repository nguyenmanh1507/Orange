import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

function emptyFn () {}

class Panel extends Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    expanded: PropTypes.bool,
    onCollapse: PropTypes.func,
    onExpand: PropTypes.func,
    style: PropTypes.any
  }

  static defaultProps = {
    title: 'Panel title',
    expanded: false,
    onCollapse: emptyFn,
    onExpand: emptyFn
  }

  constructor (props) {
    super(props)
    this.state = {
      height: props.expanded ? null : 0
    }
  }

  onToggle = () => {
    LayoutAnimation.spring()
    this.setState(prevState => ({
      height: prevState.height === null ? 0 : null
    }))
  }

  render () {
    const { children, title, style } = this.props
    const { height } = this.state

    return (
      <View style={[styles.main, style]}>
        <TouchableOpacity onPress={this.onToggle}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <View style={{ height }}>
          {children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden'
  },
  title: {
    fontWeight: 'bold',
    padding: 15
  }
})

export default Panel
