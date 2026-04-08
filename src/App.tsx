import { Navbar, Hero, FeaturedProducts, Collections, Testimonials, Newsletter, Footer } from './components';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Collections />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
