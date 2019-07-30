import React, { Component} from 'react'
import { connect } from 'react-redux'

class Grandchild extends Component {
 render(){   
  return(
    <div>
      {this.props.todos.map(todo => (
        <p key={todo.id}>{todo.name}</p>
       ))}
    </div>
  )  
 }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(Grandchild)