'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Odeslání dat do Supabase nebo jiného API (příklad)
    console.log({ name, email, message })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Jméno"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Zpráva"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Odeslat</button>
    </form>
  )
}

export default ContactForm
