import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Searched from './Searched'
import HouseContext from '../context/houseContext'

const SearchResult = () => {
    const { country } = useParams()
    const allHouses = useContext(HouseContext)
    const filtCountry = allHouses.filter((item)=> item.country === country)
  return (
    <div className='mt-2'>
        <h4>Results for {country}:</h4>
        <table className= "table table-hover">
            <tbody>
                {filtCountry.map((house) => (
                    <Searched key={house.id} house={house} />
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SearchResult
