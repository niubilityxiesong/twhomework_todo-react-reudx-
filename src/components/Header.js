import React from 'react'
import { connect } from 'react-redux';

class Header extends React.Component {
  render(){
    return (<header className="header">
  <h1>todos</h1>
  <input className="new-todo" placeholder="What needs to be done?"
         onKeyPress={(event) => {
           let label = event.target.value.trim();
           if(event.charCode === 13 && label.length !== 0){
             this.props.addTodo(label);
             event.target.value='';
           }
         }}/></header>)
        }
}

const emptyMap = () => ({})
const mapDispachToState = (dispatch) => ({
  addTodo: (label) => {
    dispatch({
      type: "ADD_TODO",
      data: { label }
    })
  }
})


export default connect(emptyMap, mapDispachToState)(Header);

