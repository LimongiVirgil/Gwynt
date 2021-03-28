import React, { useState, useEffect, useRef } from 'react';
import { fullScreen } from '../../tools/fullScreen'
import './Musics.scss'

function Musics() {
	const sound = useRef(null);
	const audio = useRef(null);

	const [volume, setVolume] = useState(false);

	const playlist = [
		'./musics/the-witcher-3-wild-hunt-blood-wine-ost-gwent-music-2.mp3',
		'./musics/the-witcher-3-wild-hunt-blood-wine-ost-gwent-music-3.mp3',
		'./musics/the-witcher-3-wild-hunt-blood-wine-ost-gwent-music-4.mp3',
		'./musics/the-witcher-3-wild-hunt-blood-wine-ost-gwent-music-the-mandragora.mp3',
		'./musics/the-witcher-3-wild-hunt-blood-wine-ost-gwent-music-the-musty-scent-of-fresh-pate.mp3',
		'./musics/the-witcher-3-wild-hunt-ost-gwent-music-drink-up-theres-more.mp3',
		'./musics/the-witcher-3-wild-hunt-ost-gwent-music-the-nightingale.mp3',
		'./musics/the-witcher-3-wild-hunt-soundtrack-a-story-you-wont-believe-gwent-tavern.mp3',
		'./musics/the-witcher-3-wild-hunt-soundtrack-another-round-for-everyone-gwent-tavern.mp3',
		'./musics/the-witcher-3-wild-hunt-soundtrack-back-on-the-path-gwent-tavern.mp3',
		'./musics/the-witcher-3-wild-hunt-soundtrack-unreleased-gwenttavern-track.mp3',
	]

	var randSound = playlist[Math.floor(Math.random() * playlist.length)];

	useEffect(() => {
		if (volume) {
			sound.current.src = randSound;
			audio.current.load()
			audio.current.play()
		} else {
			audio.current.pause()
		}
	}, [volume, randSound]);

	function handleClick() {
		var revert = !volume
		setVolume(revert)
	}

	function newMusic() {
		if (volume) {
			setTimeout(function(){ 
				sound.current.src = playlist[Math.floor(Math.random() * playlist.length)];
				audio.current.load()
				audio.current.play()
			}, 3000);
		}
	}

	return(
		<div className="icon">
			<img onClick={fullScreen} src="./images/fullscreen.svg" alt='fullscreen button'/>
			<div className="audio">
				{volume &&
					<img onClick={handleClick} src="./images/speaker.svg" alt="mute button"/>
				}
				{!volume && 
					<img onClick={handleClick} src="./images/mute.svg" alt="mute button"/>
				}
				<audio ref={audio} onEnded={newMusic} className="sound-elements">
					<source ref={sound} src=""></source>
				</audio>
			</div>
		</div>
	)
}

export default Musics