import React from 'react';
const Search=(props)=>(

<div className="name-filter">
        <input className="text" type="text" placeholder="name movie" onChange={(e)=> props.search(e.target.value)}/>
        <input className="button" type="button" value="Search" />
      </div>
)
export default Search;