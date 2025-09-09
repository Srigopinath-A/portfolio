
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/experience';
import Achievements from './components/Achivements';


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Experience/>
      <Achievements/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
