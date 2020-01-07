import React, { Component } from 'react'
import Book from '../Book/Book'

export class BookList extends Component {



    

    render() {

        const books = this.props.books;
        console.log(books)

        const list = books.map((book, i) => 
        <Book
        key={i}
        title={book.volumeInfo.title}
        image={
          "imageLinks" in book.volumeInfo
            ? book.volumeInfo.imageLinks.thumbnail
            : ""
        }
        author={
          "authors" in book.volumeInfo
            ? `Author(s): ` + book.volumeInfo.authors
            : ""
        }
        price={
          "listPrice" in book.saleInfo
            ? `Price: $` + book.saleInfo.listPrice.amount
            : ""
        }
        description={book.volumeInfo.description}
        preview={book.volumeInfo.previewLink}
      />
        )
        
        return (

            <div className = "booklist">
                {list}
            </div>
        )
    }
}

BookList.defaultProps = {
    books: []
}

export default BookList
