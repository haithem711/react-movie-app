import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Rating from './Rating';
import Movielist from './Movielist';



let movies=[{
  rating:3,
  image:'https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg',
  titre:'Inception ',
year:'2010'},
  {rating:4,
  image:'https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg',
  titre:'Shawshank redemption ',
  year:'2000'},
]


class App extends Component{
  state={
    movies : movies, 
    rating : 1,
    keyword : "",
    isloading:true
  }
  getRating = (indexOfStarClicked) => {
    this.setState({
      rating : indexOfStarClicked
    })
  }
  getkeyword = (searchTerm) => {
    this.setState({
      keyword: searchTerm
    })
  }
  add = (newMovie)=>{
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  render(){
    return (
    <div className="App">
      <div className='block'>
      <Search search={(keyword)=>this.getkeyword(keyword)}/>
      <div className="rate">
      <p>Minimum rating</p>
      <Rating rating = {(indexOfStarClicked)=> this.getRating(indexOfStarClicked)} rate={this.state.rating}/></div>
      </div>
     
     <Movielist  isloading={this.state.isloading} movies= {this.state.movies.filter(el =>el.titre.toLowerCase().includes(this.state.keyword.trim().toLowerCase())&& el.rating>=this.state.rating   )} add={(newmovie)=>this.add(newmovie)}/>
     
    </div>
  );
  }
  
}

export default App;
