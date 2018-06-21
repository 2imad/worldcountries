import React from 'react'




const CountryDetail = ({country}) => {

console.log(country)



    if(!country){
	return  <div>Loading </div>

}

const flag = country.flag
const name = country.name
const population = country.population
const region = country.region
const capital = country.capital
const time = country.timezones[0]
    return (
        <div>
        <div>
         <div className="card">
           <img className="card-img-top " src={flag} alt="flag"/>
             <div className="card-body">
           <p className="card-text">
           Country Name : {name} <br/> 
           Capital: {capital} <br/> 
           Region : {region} <br/> 
           Population : {population.toLocaleString()} <br/> 
           Time Zone : {time}
           </p>
         </div>
         </div>
     </div>
</div> 
  )


}

export default CountryDetail 