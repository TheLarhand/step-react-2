import { useState } from 'react';
import './App.css';
import './Fonts.css';
import Footer from './components/Footer';
import Header from './components/header/Header';
import MainSection from './components/mainSection/MainSection';
import SaleSection from './components/saleSection/SaleSection';

const productsImg = require.context('./images/products', false, /\.(png|jpe?g|svg)$/);
const saleProductsImg = require.context('./images/products/sale', false, /\.(png|jpe?g|svg)$/);

function App() {
  const navLinks = [
    {title: "Main page", href: "#"},
    {title: "Shop", href: "#"},
    {title: "About", href: "#"},
    {title: "Contacts", href: "#"},
  ]

  const mainContent = {
    mainSectionInfo: {
      title: "New Arrivals",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin"
    },
    saleSectionInfo: {
      title: "Deals Of The Month",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin"
    },
    products: [
      { id: 1, title: "name1", body: "description",sale: false, image: productsImg(productsImg.keys()[0]), brand: "brand1", year: 2017, price: 1000},
      { id: 2, title: "name2", body: "description",sale: false, image: productsImg(productsImg.keys()[1]), brand: "brand2", year: 2020, price: 2000},
      { id: 3, title: "name3", body: "description",sale: false, image: productsImg(productsImg.keys()[2]), brand: "brand3", year: 2007, price: 6000},
      { id: 4, title: "name4", body: "description",sale: false, image: productsImg(productsImg.keys()[3]), brand: "brand4", year: 2019, price: 7000},
      { id: 5, title: "name5", body: "description",sale: false, image: productsImg(productsImg.keys()[4]), brand: "brand5", year: 2018, price: 5000},
      { id: 6, title: "name6", body: "description",sale: false, image: productsImg(productsImg.keys()[5]), brand: "brand6", year: 2017, price: 10000},
      { id: 7, title: "name1", body: "description",sale: true, image: saleProductsImg(saleProductsImg.keys()[0]), brand: "brand1", year: 2017, price: 1000},
      { id: 8, title: "name2", body: "description",sale: true, image: saleProductsImg(saleProductsImg.keys()[1]), brand: "brand2", year: 2020, price: 2000},
      { id: 9, title: "name3", body: "description",sale: true, image: saleProductsImg(saleProductsImg.keys()[2]), brand: "brand3", year: 2007, price: 6000},
    ]
  }

  const [city, setCity] = useState('testCity')

  const changeCity = (newCity) =>{
    setCity(newCity);
}

  return (
    <div className="App">
      <Header 
        city={city}
        navLinks={navLinks}
        change={changeCity}
        products={mainContent.products}
      />
      <SaleSection
        mainContent={mainContent}
      />
      <MainSection
        mainContent={mainContent}
      />
      <Footer/>
    </div>
  );
}

export default App;

//Inspect Styles
