import logo from './logo.svg';
import './App.css';
import Header from "./components/header/index"
import Navbar from "./components/navbar/index"
import Hero from "./components/hero-div/index"
import Banner1 from "./components/banners/banner1"
import DonateInfo from "./components/donate-info/index"
import Card from "./components/card/index"
import Chart from "./components/chart/chart"
import Banner2 from './components/banner2/index'
import Form1 from './components/form/index'
import Event from './components/event/index'
import Footer from './components/footer/index'
function App() {
  return (
    <div className="App">
      <Header />
     
      <Navbar /> 
      <Hero />
      <Banner1 />
      <DonateInfo />
      <Card/>
      <Chart/>
      <Banner2/>
      <Form1/>
      <Event/>
      <Footer/>
    </div>
  );
}

export default App;
