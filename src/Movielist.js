import React from 'react';
import Moviecard from './Moviecard';
import AddModal from './AddModal';

const Movielist = (props) => <div className="movie">
  <div className="movie-app-main">
    <div className="movie-list">
      <Moviecard list={props.movies} />
    
      <div className="new-card"><AddModal add={x => props.add(x)}/></div>
    </div>
  </div>
</div>

export default Movielist;