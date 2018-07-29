import React from 'react'
import { connect } from 'react-redux';


class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={edit:false, temptext:""}
    }

    changeEdting = (check) => {
        let newState = [...this.state];
        newState.edit = check;
        this.setState(newState);
    }
    changeText = (text) => {
        let newState = [...this.state];
        newState.temptext = text;
        this.setState(newState);
    }
    render(){
        let clazzName;
        if((this.props.display === "Active" && this.props.elm.completed) || (this.props.display === "Completed" && !this.props.elm.completed)){
            clazzName = "hidden";
        }
        else if(this.state.edit){
            clazzName = "editing";
        }
        else if(this.props.elm.completed){
            clazzName = "completed";
        }
        else{
            clazzName = '';
        }
        return (<li className={clazzName} id={this.props.id}>
        <div className="view">
            <input className="toggle" type="checkbox" checked={this.props.elm.completed} onChange={() => {this.props.toggleTodo(this.props.id)}}/>
            <label onDoubleClick={() => {this.changeEdting(true)}}>{this.props.elm.label}</label>
            <button className="destroy" onClick={() => {this.props.destoryElm(this.props.id)}}></button>
        </div>
        <input className="edit" value={this.state.temptext} 
        onChange={(event) =>{this.changeText(event.target.value)}} 
        onKeyPress={(event) => {
            if(event.charCode === 13){
                this.props.getNewText(this.props.id, this.state.temptext);
                this.changeEdting(false);
            }
        }}
        autoFocus onBlur={() => {this.changeEdting(false)}}/>
    </li>)
    }
}

const mapPropsToState = (state) => ({
    display:state.display
})
const mapDispatchToState = (dispatch) => ({
    destoryElm:(id) => {
        dispatch({
            type:"DESTORY_ELM",
            data:id
        })
    },

    toggleTodo:(id) => {
        dispatch({
            type:"CHOOSE_TODO",
            data:id
        })
    },

    getNewText:(id, text) => {
        dispatch({
            type:"GET_NEW_TEXT",
            data:{id:id, text:text}
        })
    }

})

export default connect(mapPropsToState, mapDispatchToState)(Todo)