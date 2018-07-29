import React from 'react'
import { connect } from 'react-redux';

class Footer extends React.Component {

    render(){
        return (<footer className="footer">
        <span className="todo-count"><strong>{(this.props.todos.filter(elm => !elm.completed)).length}</strong> item left</span>
        <ul className="filters">
            <li>
                <a className={this.props.display === "All" ? "selected" : ""} href="#/" onClick={() => this.props.showAll('All')}>All</a>
            </li>
            <li>
                <a className={this.props.display === "Active" ? "selected" : ""} href="#/active" onClick={() => this.props.showAll('Active')}>Active</a>
            </li>
            <li>
                <a className={this.props.display === "Completed" ? "selected" : ""} href="#/completed" onClick={() => this.props.showAll('Completed')}>Completed</a>
            </li>
        </ul>
        <button className="clear-completed" onClick={this.props.claerCompleted}>Clear completed</button>
    </footer>);
    }
}

const mapStateToProps = (state) => ({
    todos:state.todos,
    display:state.display
});

const mapDispauchToState = (dispatch) => ({
    showAll:(pattern) => {
        dispatch({
            type:"DISPLAT_PATTERN",
            data:pattern
        })
    },

    claerCompleted:() =>{
        dispatch({
            type:"CLEAR_COMPLETED"
        })
    }
})
export default connect(mapStateToProps, mapDispauchToState)(Footer)