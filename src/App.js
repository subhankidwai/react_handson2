import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  state = {
    Name : "",
    Department : "",
    Rating : "",
    employees : []
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  submitHandler = (s) => {
    s.preventDefault();
    const empObj = {
      Name : this.state.Name,
      Department : this.state.Department,
      Rating : this.state.Rating
    }

    const arr = this.state.employees;
    arr.push(empObj)
    this.setState({employees : arr})
  }

  render() {
    return (
      <div className='page'>
        <h1>EMPLOYEE FEEDBACK FORM</h1>

        <form className='form'>
          <label>Name : </label>
          <input type={'text'} name="Name" value={this.state.Name} onChange={this.changeHandler} className='inp1' ></input><br/>
          <label>Department : </label>
          <input type={'text'} name="Department" value={this.state.Department} onChange={this.changeHandler} className='inp1'></input><br/>
          <label>Rating : </label>
          <input type={'number'} name="Rating" value={this.state.Rating} onChange={this.changeHandler} className='inp1'></input><br/>
          <button onClick={this.submitHandler} className='btn'>Submit</button>
        </form>
        
        <div >
          <div className='container'>
            {this.state.employees.map((value,index,array)=>{
              return(
                <div key={index} className='box'>Name : {value.Name} | Department : {value.Department} | Raing : {value.Rating}</div>
              )
            }
            )}
          </div>
        </div>
      </div>
    )
  }
}
