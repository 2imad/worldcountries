import React from  'react'

const CountryListItem = ({country , onCountrySelect}) => {

const name = country.name
const flag = country.flag
const capital = country.capital
const region = country.region
 
   return (
            <li onClick={() => onCountrySelect(country)}  className='list-inline-item'>
            <div className='video-list media'>
               <div className='media-left'>
                <img style={{width:'5em'}} className='media-object rounded-circle' src={flag} />
               </div>
               <div className='media-body'>
                 <div className='media-heading'> {name}<br/>{capital}<br/>{region}</div>
                 

               </div>
            </div>
           </li>
        ) 
}

export default CountryListItem