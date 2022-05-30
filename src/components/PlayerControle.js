import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'
function PlayerControle(props){
    return(
        <div className="c-player-controle">
            <button className='skip' onClick={() => props.SkipSong(false)}><FontAwesomeIcon icon={faBackward}/></button>
            <button className='play' onClick={() => props.setIsPlaying(!props.isPlaying)}><FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}/></button>
            <button className='skip' onClick={() => props.SkipSong()}> <FontAwesomeIcon icon={faForward}/></button>
        </div>
    )
}

export default PlayerControle;