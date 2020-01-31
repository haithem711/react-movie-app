import React from 'react'
import SpinnerComp from './SpinnerComp'

const Hoc = (Component) => {
    return props => props.isloading ?< SpinnerComp/> : <Component {...props}/>

}

export default Hoc