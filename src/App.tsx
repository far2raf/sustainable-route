import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [start, setStart] = React.useState('');
  const [finish, setFinish] = React.useState('');
  const onClick = () => {
    window.location.href = `https://www.google.com/search?q=start: ${start}, finish: ${finish}`;
    
  };
  const points: any[] = [
    [53.566474, 9.912803],
    [53.558244, 9.959284]
  ].map(el => ({x: el[0], y: el[1]}));

  const googleMapLink = 'https://www.google.com/maps/place';

  const googleMapLinkCreator = (e: any) => {
    return `${googleMapLink}/${e.x},${e.y}`;
  };
  const viewMapLinCreator = (e: any) => {
    return (
      <div>
        <a href={ e }> {e} </a> 
      </div>
    );
  }
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
            { 
              points
                .map(googleMapLinkCreator)
                .map(viewMapLinCreator)
            }
          </>
        ) : (<></>)}
      </div>
    </div>
  );
}

export default App;
