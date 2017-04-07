import React from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../actions'
import { decCounter } from '../actions'
import { viewCounter } from '../actions'

let AddCounter = ({ dispatch }) => {

    return (
        <div>
                <a className="waves-effect waves-light btn modal-trigger pink accent-2" onClick={() => {dispatch(addCounter(4))} }>
                    +
                </a>
                <a className="waves-effect waves-light btn modal-trigger pink accent-2" onClick={() => {dispatch(decCounter(5))} }>
                    -
                </a>

                <p onClick={() => {dispatch(viewCounter(""))} }>TODO</p>
        </div>
    )
};
AddCounter = connect()(AddCounter);

export default AddCounter
