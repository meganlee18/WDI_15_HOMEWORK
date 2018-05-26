import React from 'react'
import LikeButton from './LikeButton'
import DumbLikeButton from './DumbLikeButton'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: ['have breakfast','have brunch','have a snack'],
      newTaskValue: '',
      cross_out: true
    }
  }

  handleAddTask = (event) => {
    //console.log("add class")
    event.preventDefault() //this is needed if submitting using form
    const {tasks, newTaskValue} = this.state
    //try to write immutable code - make copies 
    const newTasks = tasks.slice(0) //=> cloning existing array + make new one
    newTasks.push(newTaskValue)

    this.setState((prevState, props) => {
     return {
       tasks: [...tasks, newTaskValue] //put the original 3 elements in the new array instead of nested array of the entire element
     }
    })
  }

  handleInputChange = (event) => {
    this.setState({newTaskValue: event.target.value})
  }

  //es 7 feature-> adding arrow function and it won't need the binding
  handleDelete = (index) => {
    const {tasks} = this.state
    console.log(index)
    
    this.setState({
      //look up index of elem in the array and delete accordingly
      //get a copy of array back
      tasks: tasks.filter((task, i) => i !== index)
    }) 
  }

  handleCrossOut = (selectedIndex) => {

    // //make a copy of the array - a separate array
    // const copiedTasks = this.state.tasks.slice(0)
    // // another way to make copy:
    // // const copiedTasks = [...this.state.tasks]

    // //flip the array
    // copiedTasks[selectedIndex].completed = !this.state.tasks[selectedIndex].completed

    this.setState((prevState, props) => {
      const updatedTasks = prevState.tasks.map((task, index) => {

        if (selectedIndex === index) {
          return {...task,completed: !task.completed}
        }else{
          return task
      }
    });

    return <div>

      <form>
      <input onChange={this.handleInputChange} type="text" />
      <button onClick={this.handleAddTask}>Add</button>
      </form>

      <ul>
        {tasks.map((task,index) => { 
          return <li onClick={() => this.handleCrossOut} key={index}> 
            <button onClick={() => this.handleDelete(index)}>X</button>
          </li>
        })}
      </ul>
    </div>
  }
}
