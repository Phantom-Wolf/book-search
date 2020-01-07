import React, { Component } from 'react';
import './SearchForm.css'
import SearchFilter from '../SearchFilter/SearchFilter';
import BookList from '../BookList/BookList';


export class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            books: [],
            bookType: "full",
            printType: "all"

        }
    }

    searchChanged(bookSearch) {
        this.setState({
            search: bookSearch.split(' ').join('%20')
        })
    }

    handleBookFilter(prop){
        this.setState({
            bookType: prop
        });
    }

    handlePrintFilter(prop){
        this.setState({
            printType: prop
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        const {search, bookType, printType} = this.state;
        // const filter = bookType !== "no-filter" ? bookType : "";
        
        console.log(search, bookType, printType);

        const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms?q=${search}&printType=${printType}&filter=${bookType}`;
       console.log(url);
        fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.aaaaabbbbb');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        console.log(err)
      });

      
    }

    

    render() {

        const selectOptions = {

                printSelections: [
                    "all", 
                    "books", 
                    "magazines"
                ],

                bookSelections: [
                    "full",
                    "partial",
                    "free-ebooks",
                    "paid-ebooks",
                    "ebooks"
                ]
            };

        return (

            <div>
                <div className = "search-form">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor = "bookSearch" className = "search-label">Search: </label>
                        <input
                            type = "text"
                            name = "bookSearch"
                            id = "bookSearch"
                            placeholder = "henry"
                            onChange = {e => this.searchChanged(e.target.value)}
                        />
                        <button type = "submit">Search</button>
                    </form>
                    
                </div>
                <SearchFilter 
                    selectOptions = {selectOptions}
                    handleBookFilter = {prop => this.handleBookFilter(prop)}
                    handlePrintFilter = {prop => this.handlePrintFilter(prop)}
                />
                <BookList
                    books = {this.state.books}
                />
            </div>
        )
    }
}


export default SearchForm
