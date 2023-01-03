import './App.css'
import MovieSearch from './MovieSearch'

function App() {

  return (
    <div className="App">
        <h1 className='title' id="startshow" style={{textAlign: 'center', marginBottom: '30px', fontSize: '50px', paddingTop: '1.5em'}}>Movie Search</h1>
      <MovieSearch />

    </div>
  )
}

export default App
