import React, { useMemo, useState } from 'react'
import BookCard from '../components/BookCard'

const BOOKS = [
  { id: 1, title: 'Deep Learning', author: 'Ian', tags: ['AI','ML'], image: '/images/book1.jpg' },
  { id: 2, title: 'React in Action', author: 'Mark', tags: ['Dev','React'], image: '/images/book1.jpg' },
  { id: 3, title: 'Atomic Habits', author: 'James', tags: ['Self Help'], image: '/images/book1.jpg' }
]

export default function Categories(){
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState('All')

  const tags = ['All','AI','ML','Dev','React','Self Help']

  const filtered = useMemo(() => {
    return BOOKS.filter(b => {
      if (selected !== 'All' && !(b.tags||[]).includes(selected)) return false
      if (!query) return true
      return b.title.toLowerCase().includes(query.toLowerCase()) || (b.author||'').toLowerCase().includes(query.toLowerCase())
    })
  }, [query, selected])

  return (
    <div>
      <div className="flex items-center gap-4">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search books or authors" className="p-3 rounded border w-full max-w-md" />
        <div className="flex gap-2 flex-wrap">
          {tags.map(t => (
            <button key={t} onClick={() => setSelected(t)} className={`px-3 py-1 rounded ${selected===t ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>{t}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filtered.map(b => <BookCard key={b.id} book={b} />)}
      </div>
    </div>
  )
}
