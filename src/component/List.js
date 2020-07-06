import React, { Component } from 'react'

 class List extends Component {

state = {
    isEdit:false
}
  

    //toggleState run when press button Edit Course line 17
    toggleState = ()=> {
        let {isEdit} = this.state
        this.setState({ isEdit:!isEdit })
    }

    // renderCourse fire when it is false  (render course item)
    renderCourse = ()=>{
        return(
            <li>
                <span>  {this.props.course.name}</span>
                <button onClick={ ()=>{this.toggleState()} }> Edit Course</button>
                <button onClick={ ()=> this.props.DeleteCours(this.props.index) }> Delete Course</button>
            </li> 
        )
    }



    updateCourseItem = (e)=>{
        e.preventDefault()
        this.props.EditCourse(this.props.index,this.input.value);
        this.toggleState()
    }

    // renderUpdateForm  fire when press edit course
    renderUpdateForm = ()=> {
        return(
    <form onSubmit={this.updateCourseItem}>
        <input type='text'  defaultValue={this.props.course.name} ref={(v)=> this.input =v}/> 
        <button> Update course</button>
    </form>
        )
    }



    render() {
  let {isEdit} =this.state
        return (
            <React.Fragment>
              {   isEdit? this.renderUpdateForm() :this.renderCourse()  }
               
            </React.Fragment>
        )
    }
}

export default List


// every component want to render shoud call like function >> this.renderUpdateForm()
// this.renderCourse() 


// line 31 important because of this.props.EditCourse(this.props.index,this.input.value);
//defaultValue = value line 33
// line  39 important because of ref={(v)=> this.input =v}  and  

