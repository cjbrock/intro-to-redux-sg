import React, { Component} from 'react'
import { connect } from 'react-redux'
import Todos from './Todos'

class CompleteTodos extends Component {
 render(){   
  return(
    <div>
      <Todos todos={this.props.completed}/>
    </div>
  )  
 }
}

const mapStateToProps = state => {
  return{
    completed: state.filter(todo => todo.complete)
  }
}

export default connect(mapStateToProps)(CompleteTodos)