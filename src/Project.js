import React, { useEffect } from 'react'
import {useState,useCallback} from 'react'
// import axios from 'axios'



function ProjectComponent() {

    const targetAPI = "https://restcountries.com/v3.1/all";

    const [countries,updateCountries] = useState([]);
    const [filteredCountries,updateFilteredCountries] = useState([])

    const logResult = useCallback(() =>{
        return 2+2;
    },[]);
   
    // Code with fectch API
    useEffect(() => {
            fetch(targetAPI).then(response => response.json())
            .then (response => {
            updateCountries(response);
            updateFilteredCountries(response);
        })
        },[logResult])

    // Code with axios
    // useEffect(() => {
    //        axios.get(targetAPI)
    //        .then (response => {
    //          updateCountries(response.data);
    //        updateFilteredCountries(response.data);
    //        })
    //        },[logResult])

    const getUpdatedCountries = (e)=>{
        
        updateFilteredCountries(countries.filter(country => {
                return country.name.common.toLowerCase().startsWith(e.target.value.toLowerCase())
            })
        )
    };

    const getCountriesForRegions = (e) => {
        updateFilteredCountries(countries.filter(country => {
                    return country.region === e.target.value;
                }))
       
    };


  return (
    <div>
        <form>
            <input type="text" placeholder="Enter the Country Name" onChange={(e)=>{getUpdatedCountries(e)}}/>
            <select onChange={(e)=>{getCountriesForRegions(e)}}>
                <option value="">---</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
        <div className="dashboard">        
            {
                filteredCountries && filteredCountries.length > 0? 
                filteredCountries.map((item,index)=>(
                        <div key={index}>
                            <h3>{item.name.common}</h3>
                            <img src={item.flags.png} alt="Country Flag"/>
                        </div>
                    ))
                : "No Data Available"
         
             }
        </div>
    </div>
  
  )
}

export default ProjectComponent

