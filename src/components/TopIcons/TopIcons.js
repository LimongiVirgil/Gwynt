import React from 'react';
import Musics from './Musics/Musics'
import FullScreenIcon from './FullScreen/FullScreen';

import './TopIcons.scss'

export default function TopIcons() {

  return(
    <div className="icon">
      <FullScreenIcon />
      <Musics />
    </div>
  )
}
