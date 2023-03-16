import './App.css';
import { Navbar, Countries, CountryInfo} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Navbar />
            
              
          <Routes >
                
                  <Route path="/" exact element={<Countries />}/>
                  <Route path="/country/:countryName" exact element={<CountryInfo />}/>
                  {/* <Route path="/video/:id" element={<VideoDetail />}/>
                  <Route path="/channel/:id" element={<ChannelDetail />}/>
                  <Route path="/search/:searchTerm" element={<SearchFeed />}/> */}
            </Routes>
                  
      </BrowserRouter>
    </div>
  );
}

export default App;
