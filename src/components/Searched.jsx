import React from 'react'
import { useNavigate } from 'react-router-dom'

const Searched = ({house}) => {
    const navigate = useNavigate()
    const setActive = ()=> {navigate(`/houses/${house.id}`)}
  return (
    <tr onClick={setActive}>
        <td>{house.address}</td>
        <td>{house.price}</td>
        <td>{house.likes}</td>
    </tr>
  )
}

export default Searched
