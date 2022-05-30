import { useState, useEffect, useRef } from 'react';
import PlayerDetails from './playerdetails';
import PlayerControle from './PlayerControle';
import '../App.css';
import Hiperveza from './hiperveza';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Player(props){
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });
    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                    
                }
                console.log(props.songs.length)
                console.log(props.currentSongIndex)
                return temp;
            });
        }
    }
    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControle isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
            <div className='forma'><Link to={"/Hiperveza"}>Forma</Link></div>
        </div>
    )
}

export default Player;