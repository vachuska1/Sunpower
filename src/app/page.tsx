import ProductList from './components/ProductList'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'

const HomePage = () => {
  return (
    <div>
      <h1>Vítejte na stránkách Sunpower</h1>
      <ProductList />
      <Blog />
      <ContactForm />
    </div>
  )
}

export default HomePage
