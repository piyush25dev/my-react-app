import './Homeindex.css'
import Footer from '../../layout/Footer'
// import NavBar from '../../layout/NavBar'
import Hero from './components/Hero'
function HomeIndex() {
  return (
    <>
      <div className="h-full w-full">
          {/* <NavBar /> */}
          <Hero />
          <Footer />
      </div>
    </>
  )
}

export default HomeIndex
