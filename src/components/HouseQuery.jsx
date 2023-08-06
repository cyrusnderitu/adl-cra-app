import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import House from './House'
import HouseContext from '../context/houseContext'

const HouseQuery = () => {
    const { id } = useParams()
    const allHouses = useContext(HouseContext)
    const filtHouse = allHouses.find((house)=> house.id === parseInt(id))
    console.log(filtHouse)
  return (
    <>
        {filtHouse ? (<House house={filtHouse}/>) : "No House Found"}
    </>
  )
}

export default HouseQuery
