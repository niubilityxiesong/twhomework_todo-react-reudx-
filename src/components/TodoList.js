import React from 'react'
import { connect } from 'react-redux';
import Todo from './Todo'

class TodoList extends React.Component {
    render(){
        return (<section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" onClick={(event) => this.props.toggleAll(event.target.checked)}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                {this.props.todos.map((elm, index) => {return <Todo key={index} id={index} elm={elm}/>})}
                </ul>
            </section>);
    }
}

const mapStateToProps = (state) => ({
    todos:state.todos
});

const mapDispauchToState = (dispatch) => ({
    toggleAll:(checked) => {
        dispatch({
            type: "TOGGLE_ALL",
            data: checked
        })
    }
})

export default connect(mapStateToProps, mapDispauchToState)(TodoList)