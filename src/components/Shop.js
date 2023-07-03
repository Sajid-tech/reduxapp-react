/* this is without bindAction creator
import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-primary mx-2 " onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Update Money
            <button className="btn btn-primary mx-2 " onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
        </div>
    )
}

export default Shop


// with bindActionCreator
// to make it more convience we use bindactionCreator
import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-primary mx-2 " onClick={() => { actions.withdrawMoney(100) }}>-</button>
            Update Money
            <button className="btn btn-primary mx-2 " onClick={() => { actions.depositMoney(100) }}>+</button>
        </div>
    )
}

export default Shop
*/

//by destructuring

import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-primary mx-2 " onClick={() => { withdrawMoney(100) }}>-</button>
            Update Money
            <button className="btn btn-primary mx-2 " onClick={() => { depositMoney(100) }}>+</button>
        </div>
    )
}

export default Shop