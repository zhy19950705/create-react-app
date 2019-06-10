import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
    constructor(props, context){
        super(props,context);
    }
    onSubmit = (ev) => {
        ev.preventDefault();
        const input = this.input;
        if(input.value.trim()){
            return;
        }
        this.props.onAdd(input.value)
    }
    refInput = (node) => {
        this.input = node;
    }
    render(){
        return(
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} />
                    <button className="add-button" type="submit">更多</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)