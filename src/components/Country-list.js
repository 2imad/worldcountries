import React from 'react'
import CountryListItem from './Country-list-item'



const CountryList = (props) =>{
   

const countryItems = props.countries.map((country , index)=>{
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