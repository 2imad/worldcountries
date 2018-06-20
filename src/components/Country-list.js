import React from 'react'
import CountryListItem from './Country-list-item'




const CountryList = (props) =>{



if(!props.pageOfItems){
  return <div>Loading</div>
}

const countryItems = props.pageOfItems.map((country , index)=>{
     
  
  
  return (
           <CountryListItem  
              onCountrySelect={props.onCountrySelect}
            key={index} country={country}
           />
         )
       })	
 

   return(
       <div>
         <div className='row' >
		      <ul className='list-inline'>
            {countryItems}
           </ul>
          </div>
        </div>
       )
  


}
export default CountryList


