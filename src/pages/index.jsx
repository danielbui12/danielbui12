import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import About from '../components/About'
import Resume from '../components/Resume'
import TechStack from '../components/TechStack'
import ExtraSection from '../components/ExtraSection'

function Home() {
  return (
    <>
      <Header /> 
      <Nav />
      <About />
      <Resume />
      <TechStack />
      <ExtraSection />
      <Footer />
    </>
  )
}

export default Home