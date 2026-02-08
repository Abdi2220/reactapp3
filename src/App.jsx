import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import News from "./pages/News"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import Layout from "./Layout/Layout"
import LayoutAdmin from "./Layout/admin/LayoutAdmin"
import HomeAdmin from "./pages/admin/HomeAdmin"

import MyCalculator from "./pages/MyCalculator"
import Postdetalis from "./pages/jsonplaceholder/Postdetalis"

import "./App.css"
import Users from "./pages/jsonplaceholder/Users"

import Post from "./pages/jsonplaceholder/Post"
import Todos from "./pages/jsonplaceholder/Todos"
import Starships from "./pages/SWapi/Starships"
import Evreything from "./pages/newsapi/Evreything"
import Musiclist from "./pages/Music/ Musiclist"
import EvreyDetails from "./pages/newsapi/EvreyDetails"
import NewWeather from "./pages/Weather/NewWeather"
import OpenWeather3 from "./pages/Weather/OpenWeather3"
import OpenWeather4 from "./pages/Weather/OpenWeather4"
import Hobbies from "./pages/rapidapi/Hobbies"
import Facts from "./pages/rapidapi/Facts"
import LoveCalc from "./pages/rapidapi/LoveCalc"
import Hej from "./pages/Hej"

import EnergyData from "./pages/Energy/EnergyData"
import DawaAddressMap from "./pages/DAWA/DawaMap"
import Nummerplade from "./pages/motorapi/NummerPlade"
import MyApi from "./pages/myapi/MyApi"
import GameCreate from "./pages/admin/MyApi/GameCreate"
import AdminGame from "./pages/admin/MyApi/AdminGame"




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>


          {/* outlets til layout-components */}
          <Route index element={<Home />} />

          <Route path="home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="kontakt" element={<Contact />} />
          {/* json place holder */}
          <Route path="users" element={<Users />} />
          <Route path="post" element={<Post />} />

          <Route path="postdetail/:postId" element={<Postdetalis />} />

          <Route path="todos" element={<Todos />} />
          <Route path="calculator" element={<MyCalculator />} />

          <Route path="starhips" element={<Starships />} />
          
          <Route path="everything" element={<Evreything />} />

          <Route path="everyDetail" element={<EvreyDetails />} />

          <Route path="newweather" element={<NewWeather />} />

          <Route path="openweather3" element={<OpenWeather3 />} />

          <Route path="openweather4" element={<OpenWeather4 />} />

          <Route path="hobbies" element={<Hobbies />} />

          <Route path="facts" element={<Facts />} />

          <Route path="lovecalc" element={<LoveCalc />} />

          <Route path="energydata" element={<EnergyData />} />

          <Route path="DawaAddressMap" element={<DawaAddressMap />} />


          <Route path="nummerplade" element={<Nummerplade />} />

         

          <Route path="Music" element={<Musiclist />} />

          <Route path="hej" element={<Hej />} />

          <Route path="games" element={<MyApi />} />

          
          

          <Route path="*" element={<PageNotFound />} />


        </Route>
        
        {/* admin */}
     <Route path="/admin" element={ <LayoutAdmin/>}>
      
      <Route index element= {<HomeAdmin/>}/>
      <Route path="creategame" element= {<GameCreate/>}/>

      <Route path="admingame" element= {<AdminGame/>}/>
      </Route> 
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
