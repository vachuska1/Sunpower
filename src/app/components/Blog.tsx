"use client"

import { useEffect, useState } from 'react'
import supabase from '../lib/supabaseClient'

const Blog = () => {
    const [posts, setPosts] = useState<{ id: number; title: string; content: string }[]>([]);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from('posts').select('*')
        console.log('Fetched posts:', data)  // Přidejte logování dat
        if (error) throw error
        setPosts(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || 'Error fetching posts')
        } else {
          setError('Unknown error occurred')
        }
      }
    }

    fetchPosts()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.length === 0 ? (
          <li>No posts available</li>
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Blog
