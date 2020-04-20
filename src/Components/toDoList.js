

import React from 'react';
import { connect } from 'react-redux'
import {removeItem, completeItem} from '../Action/action'

function TodoList(props) {

    return (
        <div>
            {props.list.map((element) => (
                <div>
                    <p style={{textDecoration:(element.isCompleted) &&'line-through'  }}>{element.text} </p> 
                  
                    <button onClick={() =>props.removeItem(element.id)} >Delete</button>
                    <button onClick={() => props.completeItem(element.id)}>
                                {(element.isCompleted)?'undo' : 'complete'}
                                
                                
                                </button>
                </div>
            ))}


        </div>
    );
}

const mapStateProps = (state) => ({
    list: state.taskList
})


export default connect(mapStateProps,{removeItem, completeItem})(TodoList)