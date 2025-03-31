import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Úvod</Link></li>
        <li><Link href="/products">Produkty a služby</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
