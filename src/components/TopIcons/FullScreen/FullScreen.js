import React, { useState } from 'react';
import { fullScreen, exitFullScren } from '../../../tools/fullScreen'

import './FullScreenIcon.scss'

export default function FullScreenIcon() {
  const [fullscreen, setFullScreen] = useState(false)

  return (
    <div className="fullScreenIcon">
      { fullscreen &&
        <img
          onClick={() => {
            exitFullScren();
            setFullScreen(!fullscreen)
          }}
          className="exitFullScreen"
          src="./images/exitFullscreen.svg"
          alt='fullscreen button'
        />
      }
      { !fullscreen &&
        <img
          onClick={() => {
            fullScreen();
            setFullScreen(!fullscreen)
          }}
          src="./images/fullscreen.svg"
          alt='fullscreen button'
        />
      }
    </div>
  )
}
