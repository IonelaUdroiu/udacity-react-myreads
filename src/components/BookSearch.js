import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class BookSearch extends Component {

//the state of the query and the search results
state = {
  query: '',
  searchResults: []
}

updateQuery = (query) => {
  this.setState({
    query:query
  })
  this.updateSearchResults(query);
}

//display results for matching terms and empty page when no terms match
updateSearchResults = (query) => {
	if (query) {
		BooksAPI.search(query).then(searchResults => {
			if (searchResults.error) {
				this.setState({
					searchResults: []
				});
			} else {
				this.setState({
					searchResults: searchResults
				});
			}
		})
	} else {
		this.setState({
			searchResults: []
		});
	}
}
  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
             type="text"
             placeholder="Search by title or author"
             value={this.state.query}
             onChange={(event) => this.updateQuery(event.target.value)}
             />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.map(searchResult => {
              let shelf = "none";
                this.props.books.map(book => (
                  book.id === searchResult.id ?
                  shelf = book.shelf :
                  ''
                ));
                  return (
                    <li key={searchResult.id}>
                      <Book
                       book={searchResult}
                       changeShelf={this.props.changeShelf}
                       currentShelf={shelf}
                      />
                    </li>
                  )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch
