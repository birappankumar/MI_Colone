
import './App.css';
import PreNavbar from './components/PreNavbar.js';
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Slider from "./components/Slider.js"
import data from "./data/data.json" 
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReview from "./components/ProductReview.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"
function App() {
  return (
  <Router>
     <PreNavbar/>
     <Navbar/>
     <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCTS"/>
     <StarProduct starProduct={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu/>
     <Routes>
      <Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
    </Routes>
    <Routes>
      <Route exact path="/smartDevice"  element = {<HotAccessories smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice}/>}/>
    </Routes>
    <Routes>
      <Route exact path="/Home"  element = {<HotAccessories home = {data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home}/>}/>
    </Routes>
    <Routes>
      <Route exact path="/Lifestyle"  element = {<HotAccessories lifeStyle = {data.hotAccessories.lifeStyle} lifeStyleCover = {data.hotAccessoriesCover.lifeStyle}/>}/>
    </Routes>
    <Routes>
      <Route exact path="/mobileAccessories"  element = {<HotAccessories mobileAccessories = {data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {data.hotAccessoriesCover.mobileAccessories}/>}/>
    </Routes>
    <Heading text="PRODUCT REVIEW"/>
    <ProductReview productReviews={data.productReviews}/>
    <Heading text="VIDEOS"/>
    <Videos videos={data.videos}/>
    <Heading text="IN THE PRESS"/>
    <Banner banner={data.banner}/>
    <Footer footer={data.footer}/>
  </Router>
    
  );
}

export default App;