import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfList from "./components/BookShelfList";
import BookSearch from "./components/BookSearch";
import {Route} from 'react-router-dom';

class BooksApp extends Component {

// the state of the component
state = {
  books: []
  }

//load the books after the compnents mount
componentDidMount() {
  BooksAPI.getAll().then(books => {
    this.setState({books})
    })
  }

// change the book shelf
changeShelf = (book, shelf) => {
  book.shelf = shelf
  BooksAPI.update(book, shelf)
    .then(
      this.setState({
        books: this.state.books.filter(
          (b) => b.id !== book.id).concat([ book ])})
          )};

    render() {
        const state = this.state;
        const currentlyReading = state.books.filter((book) => book.shelf === 'currentlyReading')
        const wantToRead = state.books.filter((book) => book.shelf === 'wantToRead')
        const read = state.books.filter((book) => book.shelf === 'read')

        return (
            <div className="app">
                <Route exact path="/" render={() => (
                  <BookShelfList
                      currentlyReading={currentlyReading}
                      wantToRead={wantToRead}
                      read={read}
                      changeShelf={this.changeShelf}
                  />
                )}/>
                <Route path="/search" render={() => (
                    <BookSearch
                      changeShelf={this.changeShelf}
                      books={this.state.books}
                    />
                )}/>
            </div>
        )
    }
}
export default BooksApp
