import React, { Component } from 'react'

class SearchBar extends Component{
  

 handleSearch(event) {
    this.props.searchCountry(event.target.value)
  }


  render(){
   return (
          <nav className='navbar navbar-light bg-light mb-5' >
           <a className='navbar-brand'>World Countries</a>
           <form className='form-inline' >
           <input 

            onChange={this.handleSearch.bind(this)}
            placeholder="Search for..."
  
           className='form-control mr-sm-2' type='search' placeholder='search country' aria-label='search' />
           </form>
          </nav>
    )
  }
}
export default SearchBar


        
