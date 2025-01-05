import { useEffect, useState } from 'react'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
// import About from './components/6-about/About'

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 300){
        setshowScroll(true);
      }else{
        setshowScroll(false)
      }
    })
  },[])
  const [showScroll, setshowScroll] = useState(false)
  return (
    <div className='container mx-auto px-16' id='up'>
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      
      {showScroll && (  <a href="#up">
      <button className='icon-keyboard_arrow_up scroll2Top'></button>
      </a> )}
    </div>
  )
}

export default App
