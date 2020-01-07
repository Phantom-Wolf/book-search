import React, { Component } from 'react'
import './SearchFilter.css'



export class SearchFilter extends Component {
    
    render() {

        const bookOptions = this.props.selectOptions.bookSelections.map((options,i) => (
            <option value={options} key={i}>{options}</option>
        ));

        const printOptions = this.props.selectOptions.printSelections.map((options,i) => (
            <option value={options} key={i}>{options}</option>
        ));
        
        
        

        return (

            <div className = "search-filter">
                <form>
                    <label htmlFor = "print">Print Type: </label>
                    <select
                        id = "print"
                        name = "print" 
                        onChange = {prop => this.props.handlePrintFilter(prop.target.value)}  
                    >
                    {printOptions}
                    </select>
                    <label htmlFor = "type">Book Type: </label>
                    <select
                        id = "type"
                        name = "type"
                        onChange = {prop => this.props.handleBookFilter(prop.target.value)}   
                    >
                    {bookOptions}
                    </select>
                </form>
            </div>
        )
    }
}

SearchFilter.defaultProps = {
    books: []
}

export default SearchFilter
