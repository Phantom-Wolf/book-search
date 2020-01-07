import React, { Component } from 'react'
import './App.css'
import SearchForm from './SearchForm/SearchForm'


export class App extends Component {

  render() {

    return (

      <div className = "book-search">
        <div className = "header">
          <h1>Google Book Search</h1>
        </div>
        <SearchForm/>
      </div>
    )
  }
}



export default App

