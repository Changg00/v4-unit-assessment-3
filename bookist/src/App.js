import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import './data'
import data from './data';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: data,
      shelf: []
    };
  }
  addToShelf(title) {
    this.setState(function(state,title){
      return {
        shelf: state.shelf.push(title)
      }
    })
  }

  render() {
  return (
    <div className="App">
     <Header />
     <BookList books={this.state.books} addToShelf={this.addToShelf} />

     <Shelf shelf={this.state.shelf} />

     
    </div>
  );
}
}
export default App;
