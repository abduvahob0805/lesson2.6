import './App.css';
import { useEffect, useState } from 'react';
import { ClipLoader,ScaleLoader} from 'react-spinners';

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    setUser(null); 
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='body'>
      <div className="g"></div>
      <div className="card">
        <h1>Random User Generator</h1>

        {!user && (
          <div>
            <ScaleLoader
              color={"red"}
              loading={true}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}

        {user && (
          <div>
            <img className='img' src={user.picture.large} alt="User" />
            <div className="users">
              <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
              <p>{user.email}</p>
              <h3 id='h3'>{user.location.state}, {user.location.country}</h3>
            </div>
          </div>
        )}

        <button onClick={getUser}>Next User</button>
      </div>
    </div>
  );
}

export default App;
