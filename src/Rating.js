import React, { Component } from 'react';


class Rating extends Component {
    render() {
        let tab = []
        for (let i = 1; i < 6; i++) {
            if (i <= this.props.rate) tab.push( <li onClick={()=>this.props.rating(i)}>★</li> )
            else tab.push( <li onClick={()=>this.props.rating(i)}>☆</li>)
        }
        return <div className="rating">
            {tab}
        </div>
    }
}
export default Rating;