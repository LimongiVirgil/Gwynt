import React from 'react';
import Musics from './Musics/Musics'
import { fullScreen } from '../../tools/fullScreen'

import './TopIcons.scss'

export default function TopIcons() {

	return(
		<div className="icon">
			<img onClick={fullScreen} src="./images/fullscreen.svg" alt='fullscreen button'/>
			<Musics />
		</div>
	)
}
