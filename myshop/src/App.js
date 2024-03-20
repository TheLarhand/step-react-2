import { useState } from 'react';
import './App.css';
import './Fonts.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SaleSection from './components/SaleSection';

function App() {
  const navLinks = [
    {title: "Главная", href: "#"},
    {title: "Магазин", href: "#"},
    {title: "О нас", href: "#"},
    {title: "Контакты", href: "#"},
  ]

  const [city, setCity] = useState('testCity')

  const changeCity = (newCity) =>{
    setCity(newCity);
    alert(newCity);
}

  return (
    <div className="App">
      <Header 
        city={city}
        navLinks={navLinks}
        change={changeCity}
      />
      <SaleSection/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
