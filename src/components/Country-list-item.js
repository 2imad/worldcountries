import React from  'react'

const CountryListItem = ({country , onCountrySelect}) => {

const name = country.name
const flag = country.flag
const capital = country.capital

 
   return (
            <li onClick={() => onCountrySelect(country)}  className='list-inline-item'>
            <div className='video-list media'>
               <div className='media-left'>
                <img style={{width:'5em'}} className='media-object' src={flag} />
               </div>
               <div className='media-body'>
                 <div className='media-heading'> {name}<br/>{capital}  </div>
                 

               </div>
            </div>
           </li>
        ) 
}

export default CountryListItem