import { useEffect } from 'react'
import './App.css'
import { getPeople } from './services/endpoints'

function App() {
  const loadPeople = async () => {
    try {
      const people = await getPeople()
      console.log('🚀 ~ App ~ people:', people)
    } catch (error) {
      console.log('🚀 ~ loadPeople ~ error:', error)
    }
  }

  useEffect(() => {
    loadPeople()
  }, [])

  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>
}

export default App
