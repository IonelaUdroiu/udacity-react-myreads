import React, {Component} from 'react';
import BookShelf from './BookShelf.js';
import {Link} from 'react-router-dom';

class BookShelfList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>myReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfTitle='Currently Reading'
                       bookList={this.props.currentlyReading}
                       changeShelf={this.props.changeShelf}/>
            <BookShelf shelfTitle='Want to Read'
                       bookList={this.props.wantToRead}
                       changeShelf={this.props.changeShelf}/>
            <BookShelf shelfTitle='Read'
                       bookList={this.props.read}
                       changeShelf={this.props.changeShelf}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    );
  }
}

export default BookShelfList
