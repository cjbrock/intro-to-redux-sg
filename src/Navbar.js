import React from 'react'
import { connect } from 'react-redux'

const Navbar = (props) => {
  return (
    <ul>
      <li>New Todo = {props.todoLength} </li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    todoLength: state.length
  }
}

export default connect(mapStateToProps)(Navbar)