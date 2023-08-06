import React, { useState } from 'react'
import {HiOutlineMailOpen} from 'react-icons/hi'
import Inquiry from './Inquiry'
const House = ({house}) => {
    const [active, setActive] = useState(false)
  return (
    <div>
      <div className="row mt-2">
        <h5 className= "col-md-12">{house.country}</h5>
        </div>
        <div className="row">
            <h3 className= "col-md-12">{house.address}</h3>
        </div>
        <div className="row">
            <div className="col-md-7">
                <img src={`/images/${house.photo}.jpg`} alt="House" style={{width: '80%'}}/>
            </div>
            <div className="col-md-5">
                <p className="price" style={{color: 'burlywood', fontSize: '2rem'}}>${house.price}</p>
                <p>{house.description}</p>
                <HiOutlineMailOpen onClick={()=> setActive(!active)} className='mt-2 mb-2' style={{fontSize: '3rem', color: 'burlywood'}}/>
                {active && <Inquiry />}
            </div>
        </div>
    </div>
  )
}

export default House

