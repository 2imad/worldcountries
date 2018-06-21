import React , {Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import SearchBar from './components/Search-bar'
import CountryList from './components/Country-list'
import CountryDetail from './components/Country-detail'
import Pagination from './components/Pagination'



class App extends Component{
	constructor(props){
		super(props)
	
       this.state = { 
          	 countries : [] ,
             selectedCountry : null,
             
        }
       this.onChangePage = this.onChangePage.bind(this)
      }

      onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }



      componentWillMount(){
       const URL = 'https://restcountries.eu/rest/v2/all'
  	       axios.get(URL)
	         .then(res => {
	         const countries  = res.data
           
           this.setState({
            countries : countries,
            selectedCountry : countries[0],
            pageOfItem :[]
          })
        
        })
      }
    
      
  

searchCountry(query){
    let country = 
    this.state.countries.filter((country)=>{
      return country.name.includes(query)
    })
    this.setState({countries : country})
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
               searchCountry={this.searchCountry.bind(this)} 
               searchByRegion={this.searchByRegion.bind(this)}
               getEurope={this.getEurope.bind(this)}
               countries={this.state.countries}
            
              />
            <Pagination items={this.state.countries} onChangePage={this.onChangePage} />    
            <CountryDetail country={this.state.selectedCountry}/>
            <CountryList
                onCountrySelect={selectedCountry => this.setState({selectedCountry })}
                countries={this.state.countries}
                pageOfItems={this.state.pageOfItems}
              />
           </div>
     )
   }

}

ReactDOM.render(<App /> , document.getElementById('root'))