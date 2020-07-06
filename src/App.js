import React, { Component } from 'react';
import './App.css';
import List from './component/List'
import Form from './component/Form'
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
         courses:[
           {name:'HTML'},
           {name:'css'},
           {name:'jQuery'}
         ] ,
         current:''
    }
}

//UpdateCourse    to update current withe niew course letters
UpdateCourse = (e)=>{
console.log(this.state.current)
  this.setState({
    current:e.target.value
  })


}


// AddCourse  to insert new value to array
AddCourse = (e)=>{
  e.preventDefault();
  let {courses }= this.state
  let {current} = this.state
  courses.push({name:current})
  this.setState({ 
    courses,        // course:course
    current:''
  })

}


//DeleteCours 
DeleteCours = (index)=>{
  console.log(index)
  let {courses }= this.state;
  courses.splice(index,1)


   this.setState({courses})
}


// EditCourse:func update course via input  in (renderUpdateForm ) in listcomponent
EditCourse = (index,value)=>{
let courses = this.state.courses;

let course = courses[index];
course['name'] = value
this.setState({courses})

}



 render(){
   let {courses} = this.state
    let ListCourses = courses.map( (course,index)=> {
     return ( <List course={course} key={index}  DeleteCours={this.DeleteCours} index={index}  EditCourse={this.EditCourse}/>)
   } )
  return (
    <div className="App">
     <h1> Add Course</h1>
   
     <Form UpdateCourse={this.UpdateCourse} AddCourse={this.AddCourse} current={this.state.current}/>
       <ul>
       {ListCourses}
       </ul>
   
    </div>
  )
 }
}

export default App;
