import React from 'react';
import Rating from './Rating';

const Moviecard = (props) => {
  return (props.list.map(el => (
    <div className="movie-card">
      <div className="movie-rating"><Rating rating={()=>{}} rate={el.rating}/></div>
      <img src={el.image} className="image"/> 
      {/* <div
        className="movie-image"
        style={{
          backgroundImage:
            'url('+ el.image +')'
        }} /> */}
<div className="titre">{el.titre}{el.year}</div>
    </div>




  )
  ))
}





export default Moviecard;