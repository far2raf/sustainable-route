import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [start, setStart] = React.useState('');
  const [finish, setFinish] = React.useState('');
  const onClick = () => {
    window.location.href = `https://www.google.com/search?q=start: ${start}, finish: ${finish}`;
    
  };
  const points: any[] = ['21234'];
  const googleMapLinkCreator = () => {
    return 'https://www.google.com/maps';
  };
  return (
    <div className="App">
      <div>Do you want to have a sustainable route?</div>
      <div>
        <div>
          Start geo
        </div>
        <input 
          value={start}
          onChange={e => setStart(e.target.value)}
        ></input>
      </div>
      <div>
        <div>
          Finish geo
        </div>
        <input 
          value={finish}
          onChange={e => setFinish(e.target.value)}
        ></input>
      </div>
      <button onClick={onClick}>Submit</button>
      <div>
        { points ? (
          <>
            <a 
            onClick={() => window.location.href=googleMapLinkCreator()}
            >
              Click to check your route in Google Map!
            </a> 
          </>
        ) : (<></>)}
      </div>
    </div>
  );
}

export default App;
