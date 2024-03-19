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

  return (
    <div className="App">
      <Header navLinks={navLinks}/>
      <SaleSection/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
