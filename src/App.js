
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/experience';


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
