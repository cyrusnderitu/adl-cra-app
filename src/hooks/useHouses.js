import {useState, useEffect} from 'react'

const useHouses = ()=> {
    const [houses, setHouses] = useState([])

    useEffect(()=>{
      const fetchHouses = async()=>{
        const res = await fetch("/house.json")
        const data = await res.json()
        setHouses(data);
      };
      fetchHouses();
    }, [])

    return houses;
}

export default useHouses;