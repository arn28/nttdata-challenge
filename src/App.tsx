import './App.css'
import PeopleTable from './components/features/PeopleTable'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold '>Generated Random People </h1>
      <div>
        <p className='my-4'>by Arnold Balabarca</p>
        <hr />
      </div>
      <section>
        <PeopleTable></PeopleTable>
      </section>
    </>
  )
}

export default App
