import React, { Component} from 'react'
import Child from './Child'


export default class Todos extends Component {
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