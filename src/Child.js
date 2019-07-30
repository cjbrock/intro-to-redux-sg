import React, { Component } from 'react'
import Grandchild from './Grandchild'
import { connect } from 'react-redux'

class Child extends Component {
 render(){   
  return(
    <div>
      <p>{this.props.firstTask.name}</p>
      <p>{this.props.lastTask.name}</p>
      <Grandchild />
    </div>
  )  
 }
}

const mapStateToProps = state => {
  return {
    firstTask: state[0],
    lastTask: state[4]
  }
}

export default connect(mapStateToProps)(Child)