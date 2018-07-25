import React, {Component} from 'react';

class Book extends Component {

 render() {
   return (
     <div className="book">
       <div className="book-top">
         <div className="book-cover"
              style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${ this.props.book.imageLinks && this.props.book.imageLinks.thumbnail }")`}}>
          </div>
          <div className="book-shelf-changer">
             <select
              onChange={(event) => this.props.changeShelf(
              this.props.book, event.target.value
              )}
              value={this.props.currentShelf}
             >
                <option value="move" disabled>Move to...</option>
                <option selected={this.props.book.shelf === "currentlyReading"} value="currentlyReading">Currently Reading</option>
                <option selected={this.props.book.shelf === "wantToRead"} value="wantToRead">Want to Read</option>
                <option selected={this.props.book.shelf === "read"} value="read">Read</option>
                <option selected={this.props.book.shelf === "none"} value="none">None</option>
             </select>
          </div>
         </div>
           <div className="book-title">{this.props.book.title}</div>
           <div className="book-authors">{this.props.book.authors}</div>
     </div>);
   }
}

export default Book
