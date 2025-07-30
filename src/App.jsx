
import styles from './App.module.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import {About} from "./components/About/About";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Contact } from './components/Contact/Contact';
function App() {
  
  return (
  
   /* <div className={styles.App}>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>*/
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
