import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


function App(){
  return(
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="row">
        <Content></Content>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>

  );
}

export default App;


