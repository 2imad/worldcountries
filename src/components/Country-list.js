import React from 'react'
import CountryListItem from './Country-list-item'




const CountryList = (props) =>{
const start = (props.page - 1 ) * props.resPerPage
const end = props.page * props.resPerPage   
const countryItems = props.countries.slice(start , end ).map((country , index)=>{
     
  
  
  return (
           <CountryListItem  
              onCountrySelect={props.onCountrySelect}
            key={index} country={country}
           />
         )
       })	
 
   return(
       <div>
		      <ul className='list-inline'>
            {countryItems}
           </ul>
        </div>
       )
  }



export default CountryList


