import React, { useState, useEffect } from 'react';
import { fullScreen, exitFullScreen } from '../../../tools/fullScreen'

import './FullScreenIcon.scss'

export default function FullScreenIcon() {
  const [fullscreen, setFullScreen] = useState(false)

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      setFullScreen(!fullscreen)
    })
  })

  return (
    <div className="fullScreenIcon">
      { fullscreen &&
        <img
          onClick={() => {
            exitFullScreen();
            //setFullScreen(!fullscreen)
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
            //setFullScreen(!fullscreen)
          }}
          src="./images/fullscreen.svg"
          alt='fullscreen button'
        />
      }
    </div>
  )
}
