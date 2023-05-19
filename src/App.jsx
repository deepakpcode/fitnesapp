import './App.css';
import Email from './Components/Email/Email';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';


function App() {
  

  return (
    <>
    <div className="app">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Email/>
      <Footer/>
      </div>
    </>
  )
}

export default App
