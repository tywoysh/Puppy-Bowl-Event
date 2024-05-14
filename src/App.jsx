import { useGetAllPuppiesQuery } from './services/puppies';
import './App.css'

function App() {
  const { data, error, isLoading } = useGetAllPuppiesQuery();

  return (
    <>
    <h1 className='title'>Puppy Bowl Event!</h1>
      {error ? (<p>There was an error</p>)
        : isLoading ? (<p>Loading...</p>)
          : (
            <div className='dogs-container'>
              {data?.data.players.map((player) => {
                return (
                  <div className='dog-card' key={player.id}>
                    <hr key={player.id}></hr> {/* Added key to the outer fragment */}
                    <img className="dog-img" style={{ width: '150px', height: '150px' }} src={player.imageUrl} alt={player.name} />
                    <h3>{player.name}</h3>
                    <p>Breed: {player.breed}</p>
                    <p>Position: {player.status}</p>
                  </div>
                )
              })}
            </div>
          )}
    </>
  )
}

export default App
