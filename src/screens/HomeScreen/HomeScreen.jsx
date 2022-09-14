import Hero from '../../components/Hero/Hero'
import Menu from '../../components/Menu/Menu'
import Product from '../../components/Product/Product'
import About from '../../components/About/About'
import Reviews from '../../components/Reviews/Reviews'
import Contact from '../../components/Contact/Contact'



export default function HomeScreen({ burgers, pizzas, reviews }) {
  return (
    <div className="home-screen">
      <Hero />
      <Menu />

      <div id="products">
        <Product title="BURGERLER" productList={burgers} />
        <Product title="PİZZALAR" productList={pizzas} />
      </div>

      <About />
      <Reviews reviews={reviews} />
      <Contact />
    </div>
  )
}
