import { useState, useEffect } from 'react';
import Player from './components/player';
import './App.css';
import { Link } from 'react-router-dom';
function Main() {
  const [songs] = useState([
    {
      title: "Hotel California",
      artist: "Eagels",
      img_src: "./slike/Hotel California.jpg",
      src: "./Music/Hotel california.mp3"
    },
    {
      title: "Knocked off",
      artist: "Nba Youngboy",
      img_src: "./slike/yb.jpg",
      src: "./Music/knockedoff.m4a"
    },
    {
      title: "Teenage Fever",
      artist: "Drake",
      img_src: "./slike/Morelife.jpg",
      src: "./Music/teenage.m4a"
    }
  ]);
  const[currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect( () => {
setNextSongIndex(()=>{
if(currentSongIndex+1 > songs.length - 1){
  return 0;
}else{
  return currentSongIndex + 1;
}
});
  }, [currentSongIndex])
  return (
    <div className="App">
      <Player 
      currentSongIndex ={currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      />

    </div>
  );
}

export default Main;
