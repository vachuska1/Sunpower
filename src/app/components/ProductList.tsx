"use client"

import { useEffect, useState } from 'react'
import supabase from '../lib/supabaseClient'

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Zavoláme API Supabase pro získání dat
        const { data, error } = await supabase
          .from('posts')  // Tabulka, ze které chceme data
          .select('*')  // Vybíráme všechny sloupce
        if (error) throw error
        setProducts(data)
      } catch (error: unknown) {
        // Cast error to Error type to access message property
        if (error instanceof Error) {
          setError(error.message || 'Error fetching posts')  // Opraveno na 'posts'
        } else {
          setError('Unknown error occurred')
        }
      }
    }

    fetchProducts()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>Blog Posts</h2>  {/* Opravený nadpis */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>  {/* Opravené na title */}
            <p>{product.content}</p>  {/* Opravené na content */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
