import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import HouseFilter from './components/HouseFilter'
import FeaturedHouse from './components/featured-house'
import SearchResult from './components/SearchResult'
import HouseQuery from './components/HouseQuery'
import useHouses from './hooks/useHouses'
import useFeatured from './hooks/useFeatured'
import HouseContext from './context/houseContext'

const App = () => {

  const houses = useHouses();
  const featuredHouse = useFeatured(houses);
  return (
    <Router >
      <HouseContext.Provider value={houses}>
    <div className='container'>
      <Header houses={featuredHouse}/>
      <HouseFilter allHouses={houses}/>
      <Routes >
        <Route path='/' element={<FeaturedHouse house={featuredHouse}/>}/>
        <Route path='/searchresult/:country' element={<SearchResult />}/>
        <Route path='/houses/:id' element={<HouseQuery/>}/>
      </Routes>
    </div>
    </HouseContext.Provider>
    </Router>
  )
}

export default App

