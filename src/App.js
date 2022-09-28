import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/About';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Routes, Route } from 'react-router-dom'; 
import { useState,useEffect } from 'react';

function App() {
  const [ searchResults,setSearchResults ] = useState([]);
  const [ searchText , setSearchText ] = useState("");

  useEffect(() => {
    console.log(searchText," in the Search text");
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=025fd86b8464ce6c9679824b18ca4c1f&language=en-US&query=${searchText}&page=1&include_adult=false`).then(response => response.json()).then( data => {
        setSearchResults(data.results);
      })
    }
  },[searchText]); //Monitor searchText

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" component={Home} element={<Home/>} exact/>
        <Route path="/about" component={AboutView} element={<AboutView/>} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" component={MovieView} element={<MovieView/>} />
      </Routes>
    </div>
  );
}

export default App;
