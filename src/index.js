import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import SearchBar from './components/Search-bar'
import CountryList from './components/Country-list'
import CountryDetail from './components/Country-detail'
class App extends Component{
	constructor(props){
		super(props)
	
       this.state = { 
       	countries : [],
       	selectedCountry : null,
       	 
       }
	   
	   const URL = 'https://restcountries.eu/rest/v2/all'
  	   axios.get(URL)
	     .then(res => {
	       const countries  = res.data
          this.setState({
	   	  	countries : countries, 
	   	  	selectedCountry : countries[0]
	   	  	
	   	  })
	   	  
	   })
   	}

searchCountry(query){
    let countries = 
    this.state.countries.filter((country)=>{
      return country.name.includes(query)
    })
    this.setState({countries : countries})
  }

searchByRegion(query){
  let regions = 
  this.state.countries.filter((country)=>{
    return country.region.includes(query) 
  })
  this.setState({countries : regions})
}  
	
 getEurope(event){
  let europe = 
  this.state.countries.filter((country)=>{
    return country.region === 'Europe'
  })
  this.setState({countries : europe})
}   
  

  
render(){
	return ( 
	    	<div>
            <SearchBar
               countries={this.state.countries} 
               searchCountry={this.searchCountry.bind(this)} 
               searchByRegion={this.searchByRegion.bind(this)}
               getEurope={this.getEurope.bind(this)}
                />
            
             <CountryDetail country={this.state.selectedCountry}  />
            
             <CountryList
                onCountrySelect={selectedCountry => this.setState({selectedCountry })}
                countries={this.state.countries}
             />
          </div>
     )
   }

}

ReactDOM.render(<App /> , document.getElementById('root'))