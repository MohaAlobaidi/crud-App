import React from 'react'

function Form(props) {
    //UpdateCourse to insert value en lettere
    //AddCourse to insert new name in array courses
    const {UpdateCourse,AddCourse,current} = props
    return (
        <form onSubmit={AddCourse}>
            <input type='text' onChange={UpdateCourse} value={current}/>
            <button type='submit'>Add course</button>
        </form>
    )
}

export default Form

