import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/Home';
import Category from './components/Category';
import Selling from './components/Selling';
import Book from './components/Book';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
     <HomeScreen />
     <Category />
     <Selling />
     
     <Book />
     
    <Test />
    <Subscribe />
    <Footer />
    </div>
  );
}

export default App;
